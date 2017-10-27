module.exports = class dictionaryHelper{


      getDictionarySubset(list, dictionary){

          let subsetDictionary = {};

          list.forEach( key => {

              if (dictionary[key]){

                  const value = dictionary[key];

                  subsetDictionary[key] = value;
              }else{
                  console.log(`WARNING: Key not found in CMS library: ${key}`);
              }
          });

          return subsetDictionary;
      }

      formatDictionaryToJSON(dictionary){
          let formattedContent = "{\n";

          Object.keys(dictionary).forEach( key => {

              const value = dictionary[key];
              formattedContent += `\t"${key}": "${value}",\n`;

          });
          formattedContent = formattedContent.replace(/,([^,]*)$/,'$1');
          formattedContent += "}";

          return formattedContent;
      }

      formatDictionaryToString(dictionary){
          let formattedContent = "";

          Object.keys(dictionary).forEach( key => {
              const value = dictionary[key];
              formattedContent += `"${key}" = "${value}";\n`
          });

          return formattedContent
      }

      formatDictionaryToPList(dictionary){
          let formattedContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
          formattedContent += '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n';
          formattedContent += '<plist version="1.0">\n';
          formattedContent += '\t<dict>\n';

          Object.keys(dictionary).forEach( key => {

              const value = dictionary[key];

              formattedContent += `\t\t<key>${key}</key>\n`;
              formattedContent += `\t\t<string>${value}</string>\n`;

          });

          formattedContent += '\t</dict>\n';
          formattedContent += '</plist>';

          return formattedContent;
      }

      formatDictionaryToXML(dictionary){

          let formattedContent = '<?xml version="1.0" encoding="utf-8"?>';
          formattedContent = '<resources>\n\n';

          Object.keys(dictionary).forEach( key => {

              const value = dictionary[key];
              formattedContent += `\t<string name="${key}">${value}</string>\n`;

          });

          formattedContent += "\n</resources>";

          return formattedContent;
      }

      createKeyListFromDictionary(dictionary){
          let vals = [];
          for (let key in dictionary){
              if (dictionary.hasOwnProperty(key)){
                  vals.push(key);
              }
          }

          return vals;
      }

      generateFormattedContent(format, subsetDictionary){
          let formattedContent = ''

          if(format === 'plist'){
              formattedContent = this.formatDictionaryToPList(subsetDictionary);
          }else if(format === 'xml'){
              formattedContent = this.formatDictionaryToXML(subsetDictionary);
          }else if(format === 'string'){
              formattedContent = this.formatDictionaryToString(subsetDictionary);
          }else{
              formattedContent = this.formatDictionaryToJSON(subsetDictionary);
          }

          return formattedContent;
      }

      convertJSONToDictionary(json){
          let dictionary = {};

          for (let key in json){
              if (json.hasOwnProperty(key)){
                  const value = json[key]

                  if(value){
                      dictionary[key] = value
                  }
              }
          }
          return dictionary
      }

      replaceKeys(keyDictionary, valueDictionary){
          let newDictionary = {};

          for (let key in keyDictionary){
              if(keyDictionary.hasOwnProperty(key) && valueDictionary.hasOwnProperty(key)){
                  const newKey = keyDictionary[key];
                  const newValue = valueDictionary[key];

                  if (newKey && newValue){
                      newDictionary[newKey] = newValue;
                  }
              }
          }
          return newDictionary;
      }

      replaceVals(keyDictionary, valueDictionary){
          let newDictionary = {};

          for (let key in keyDictionary){
              const val = keyDictionary[key];
              if(keyDictionary.hasOwnProperty(key) && valueDictionary.hasOwnProperty(val)){
                  const newKey = key;
                  const newValue = valueDictionary[val];

                  if (newKey && newValue){
                      newDictionary[newKey] = newValue;
                  }
              }
          }
          return newDictionary;
      }
  }
