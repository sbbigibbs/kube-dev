module.exports = class parserXML{

      getKeyValuePairsForIntString(content){

          let dictionary = {};

          let pairs = content.match(/<a:KeyValueOfintstring>(.*?)<\/a:KeyValueOfintstring>/g).map( blob => {

              let keyBlob = blob.match(/<a:Key>(.*?)<\/a:Key>/g);
              keyBlob = keyBlob[0];

              let key = keyBlob.replace(/<\/?a(.*?)>/g, '');
              let valueBlob = blob.match(/<a:Value>(.*?)<\/a:Value>/g);
              let value = ""
              if (valueBlob){
                  valueBlob = valueBlob[0];
                  value = valueBlob.replace(/<\/?a(.*?)>/g, '');
              }
              dictionary[key] = value;

              return [key, value];
          });

          delete dictionary['0'];

          return dictionary
      }

      replaceSpecialCharacters(content){

          const mapObj = {
                          '&lt;'  : '<',
                          '&gt;'  : '>',
                          '&#40;' : '(',
                          '&#41;' : ')',
                          '&#35;' : '#',
                          '&amp;' : '&',
                          '&quot;' : '"',
                          '&apos;' : "'"
                      };
          const re = new RegExp(Object.keys(mapObj).join("|"), "gi");
          const newContent = content.replace(re, function(matched){
              return mapObj[matched];
          });
          return newContent
      }
  }
