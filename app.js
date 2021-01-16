var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + text;
}
 
function errorHandler() {
    console.log("error occured!", error);
    alert("something wrong with server: try again after some time");
}

function clickHandler() {
    // outputDiv.innerText = "Banana Speak " + txtInput.value;
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler);

