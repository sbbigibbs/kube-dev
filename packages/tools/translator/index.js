#!/usr/bin/env node

const program = require('commander');
const request = require('request');
const fileSystem = require('fs');
const path = require('path');
const parserXML2001 = require('./src/parsers/parserXMLSchema2001.js');
const parserXML = require('./src/parsers/parserXML.js');
const outputFileSync = require('output-file-sync');
const FileHelper = require('./src/helpers/fileHelper.js');
const DictionaryHelper = require('./src/helpers/dictionaryHelper.js');

program
    .arguments('<directory>')
    .option('-o, --output <DIR>', 'Set the output build dir')
    .option('-n, --name <STR>', 'Set the name of the generated files')
    .action(function(directory, options) {

        const parser2001 = new parserXML2001();
        const parser = new parserXML();
        const fileHelper = new FileHelper();
        const dictionaryHelper = new DictionaryHelper();

        const format = 'json';
        const dir = path.resolve(process.cwd(), directory);
        //console.log(dir)
        fileSystem.readdir(dir, (err, files) => {
            var keyList = [];
            var keyMap = {};
            var listMap = {};

            files.forEach(file => {
                //console.log(file);
                const filePath = path.join(dir, file);
                const fileName = path.basename(file, path.extname(file));
                const json = JSON.parse(fileSystem.readFileSync(filePath, 'utf8'));

                Object.keys(json).forEach(key => {
                    keyList.push(json[key]);
                    keyMap[json[key]] = key;
                    listMap[json[key]] = fileName;
                })
            });

            request.post({url:'https://cms.iherb.net/service//GetAllLanguageCode'} , (error, response, body) => {

                const languageKeyDictionary = parser.getKeyValuePairsForIntString(body);
                const languageIDs = dictionaryHelper.createKeyListFromDictionary(languageKeyDictionary);

                languageIDs.forEach( id => {

                    request.post({ url:`https://cms.iherb.net/service/GetTranslationsByLanguage?langID=${id}`},

                    function(error, response, body) {
                        var translations = {};

                        const newContent = parser.replaceSpecialCharacters(body);
                        const dictionary = parser2001.getKeyValuePairsForStrings(newContent);
                        const subsetDictionary = dictionaryHelper.getDictionarySubset(keyList, dictionary);
`  `
                        Object.keys(subsetDictionary).forEach(key => {
                            if(!translations[listMap[key]])
                                translations[listMap[key]] = {};

                            translations[listMap[key]][keyMap[key]] = subsetDictionary[key]
                        })
                        var outputPath = path.resolve(process.cwd(), options.output, `${options.name}.${languageKeyDictionary[id]}.json`);

                        console.log(`${outputPath} was created`);
                        outputFileSync(outputPath, JSON.stringify(translations));
                    })
                })
            })
        })
    })
    .parse(process.argv);

