const fileSystem = require('fs');

  /* @flow */

module.exports = class fileHelper{
    writeConentsToFile(content, fileName = "file.json"){

        const fileLocation = `./${fileName}`;
        fileSystem.writeFile(fileLocation, content, function(error){
            if (error){
                console.log(error)
            }
        });
    }

    getFileExtensionFromFormat(format){
        let fileExtension = '';

        if(format === 'plist'){
            fileExtension = 'plist';
        }else if(format === 'xml'){
            fileExtension = 'xml';
        }else if(format === 'string'){
            fileExtension = 'strings'
        }else{
            fileExtension = 'json';
        }

        return fileExtension
    }

    getFileExtension(filename){
        let components = filename.split(".");
        if( components.length === 1 || ( components[0] === "" && components.length === 2 ) ) {
            return "";
        }
        return components.pop();
    }

    isValidMasterListExension(filename){

        const extension = this.getFileExtension(filename);

        if (extension === 'json'){
            return true;
        }else{
            console.log(`ERROR: File extension ${extension} is not supported.`);
            console.log('Supported Extensions: json');
            return false;
        }
    }

    isFilePathValid(file){
        const filepath = `./${file}`;
        if (fileSystem.existsSync(filepath)){
            return true;
        }else{
            console.log(`File named: ${file} does not exist in the current directory`);
            return false;
        }
    }
}
