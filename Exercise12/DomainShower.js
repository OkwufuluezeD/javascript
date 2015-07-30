'use strict'

//DomainShower class
class DomainShower {

  //The constructor of DomainShower class
  constructor(element) {
    this._url = element;
    this._emptyMessage = ':::Enter a URL';
    this._errorMessage = ':::No proper URL match found. Please enter a valid URL.';
    this._pattern = /^((((ht|f)tp(s)?:\/\/)?([\w-]{2,66}(\.)?)+\.[a-z]{2,4}\/?)|(file:\/\/\/([\w-]{2,66}(\.)?)+\/?))([\w]+([-_]*[\w\.]+)*\/?)*$/gi;
    this._showDomain();
  }

  //defining DomainShower method _showDomain()
  _showDomain() {
    const url = this._url.value.trim();
    const emptyMessage = this._emptyMessage;
    const errorMessage = this._errorMessage;
    const pattern = this._pattern;
    if (url === '') {
        this._url.focus();
        alert (emptyMessage) ;
      } else if (!url.match(pattern)) {
        this._url.focus();
        alert (errorMessage) ;
      } else {
        const rootDomainLeft = url.substring(0, url.lastIndexOf('.'));
        const rootDomain = `${rootDomainLeft.substring(rootDomainLeft.lastIndexOf('.') + 1)}${url.substring(url.lastIndexOf('.'))}`;
        alert(`Root Domain: ${rootDomain}`);
        while (url.indexOf('.')) {
          if (url.match(/\./g).length === 1) {
            break;
          } else {
            alert(`Sub-Domain: ${url}`);
          }

          url = url.substring(url.indexOf('.') + 1);
        }
      }
  }
}

document.getElementById('submitButton').addEventListener('click', () => {
  const url = document.getElementById('url');

  //Instantiating DomainShower Object
  new DomainShower(url);
});

