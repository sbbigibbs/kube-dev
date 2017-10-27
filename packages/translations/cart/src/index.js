import arabic from '../files/cart.ar-SA.json';
import german from '../files/cart.de-DE.json';
import english from '../files/cart.en-US.json';
import spanish from '../files/cart.es-MX.json';
import french from '../files/cart.fr-FR.json';
import japanese from '../files/cart.ja-JP.json';
import korean from '../files/cart.ko-KR.json';
import portuguese from '../files/cart.pt-BR.json';
import russian from '../files/cart.ru-RU.json';
import chinese from '../files/cart.zh-CN.json';
import taiwanese from '../files/cart.zh-TW.json';

export default class Translator{

  constructor(language){
    this.language = language
    if (language === "ar-SA"){
      this.languageDictionary = arabic
    }else if (language === "de-DE"){
      this.languageDictionary = german
    }else if (language === "es-MX"){
      this.languageDictionary = spanish
    }else if (language === "fr-FR"){
      this.languageDictionary = french
    }else if (language === "ja-JP"){
      this.languageDictionary = japanese
    }else if (language === "ko-KR"){
      this.languageDictionary = korean
    }else if (language === "pt-BR"){
      this.languageDictionary = portuguese
    }else if (language === "ru-RU"){
      this.languageDictionary = russian
    }else if (language === "zh-CN"){
      this.languageDictionary = chinese
    }else if (language == "zh-TW"){
      this.languageDictionary = taiwanese 
    }else{
      this.languageDictionary = english
    }

  }

  translate(key){
    return this.languageDictionary[key];
  }

  translateCart(key) {
    return this.languageDictionary.totals[key];
  }

  translateLabels(labels) {
    return Object.keys(labels).reduce((map, key) => {
      const value = this.languageDictionary.totals[key]
      return Object.assign({}, map, {
        [key]: value
      })
    }, {})
  }

  isLeftToRightLanguage(){
    if (this.language === "ar-SA"){
      return false
    }else{
      return true
    }
  }

}