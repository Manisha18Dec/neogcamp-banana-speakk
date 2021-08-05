var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var  outputDiv=document.querySelector("#output");
// outputDiv.innerText="manisha sharma"


function clickHandler(){
    outputDiv.innerText="ajsjsjsjsjs:"+ txtInput.value;
    }
btnTranslate.addEventListener("click",clickHandler)
  