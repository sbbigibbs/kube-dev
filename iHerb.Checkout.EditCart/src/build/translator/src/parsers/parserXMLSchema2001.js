module.exports = class parserXMLSchema2001{

  getKeyValuePairsForStrings(content){

      let dictionary = {};

      let pairs = content.match(/<a:KeyValueOfanyTypeanyType>(.*?)<\/a:KeyValueOfanyTypeanyType>/g).map( blob => {

          let keyBlob = blob.match(/<a:Key i:type="b:string" xmlns:b="http:\/\/www.w3.org\/2001\/XMLSchema">(.*?)<\/a:Key>/g);
          keyBlob = keyBlob[0];

          let key = keyBlob.replace(/<\/?a(.*?)>/g, '');
          let valueBlob = blob.match(/<a:Value i:type="b:string" xmlns:b="http:\/\/www.w3.org\/2001\/XMLSchema">(.*?)<\/a:Value>/g);
          let value = ""
          if (valueBlob){
              valueBlob = valueBlob[0];
              value = valueBlob.replace(/<\/?a(.*?)>/g, '');
          }

          dictionary[key] = value;

          return [key, value];
      });

      return dictionary

  }
}
