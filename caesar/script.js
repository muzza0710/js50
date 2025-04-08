const textArea = document.querySelector("textarea");
const encryptInput = document.getElementById("file-input-encrypt")
const keyInput = document.getElementById("key-input");
const form = document.querySelector("form");
const resultPara = document.getElementById("result");

form.addEventListener("submit", (form) => {
    form.preventDefault();
    resultPara.innerText = encrypt_text(textArea.value, parseInt(keyInput.value));
    textArea.value = ""
});

function encrypt_text(text, key){
    // create array from string so it can be manipulated (is mutable)
    ciphertext = text.split();
    // go through each char in the text
    for (let i = 0, len = text.length; i < len; i++){
        // if char is upper case the base char is 'A' else its 'a'
        let base = text.toUpperCase().at(i) === text.at(i) ? 'A' : 'a';
        // get ascii value of base char
        let baseCode = base.charCodeAt(0);
        if (text.at(i).match(/[a-z]/gi)){
            // get ascii value of char at location i
            let c = (text.charCodeAt(i));
            // ensures correct wrapping for encoded char
            let encodedChar = (c - baseCode + key) % 26 + baseCode;
            // converts to ascii value back to an actual char
            ciphertext[i] = String.fromCharCode(encodedChar)
        }
        else {
            // if char is not an alpha char just add the original char to the array
            ciphertext[i] = text.at(i);
        }
    }
    // return array converted to a string
    return ciphertext.join("");
}

encryptInput.addEventListener("input", (event) => {
    // get first file in files list (only file)
    const file = event.target.files[0];
    if (!file){
        alert("file not loaded");
        return;
    }
    // create file reader 
    const reader = new FileReader();

    // read the file 
    reader.readAsText(file);

    // when full file read:
    reader.onload = (e) => {
        console.log(e);

        const result = e.target.result;
        textArea.textContent = result;
        event.target.value = '';
    }

    // if error reading file
    reader.onerror = (e) => {
        console.log(e);
    }
})