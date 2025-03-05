// get dom elements
const textArea = document.querySelector("textarea");
const keyInput = document.getElementById("key-input");
const form = document.querySelector("form");
const result_para = document.getElementById("result");

// add event listeners
form.addEventListener("submit", (form) => {
    form.preventDefault();
    if (check_input(keyInput.value)){
        result_para.innerText = encrypt_text(textArea.value, keyInput.value);
    }
    else {
        result_para.innerText = "Invalid key";
    }
});

function encrypt_text(text, key){
    // create array from string so it can be manipulated (is mutable)
    const ciphertext = text.split("");
    // go through each char in the text
    for (let i = 0, len = text.length; i < len; i++){

            ciphertext[i] = encrypt_char(text[i], key)
    }
    // return array converted to a string
    return ciphertext.join("");

    // can be achieved with the single line below
    // return text.split("").map((char) => encrypt_char(char, key)).join("");
}

function check_input(text) {
    // checks length of key is 26 characters
    if (text.length !== 26) {
        console.log("key length not 26");
        alert("key must contain exactly 26 unique alphabet characters");
        return false;
    }
    // set for checking duplicate chars
    const chars = new Set();
    for (let i = 0, len = text.length; i < len; i++) {
        // checks for none alphabet chars
        if (!/[a-z]/i.test(text[i])) {
            console.log("key contains none alpha char");
            alert("key contains none alphabet character");
            return false;
        }
        // convert char to lower case if alphabet char
        const char = text[i].toLowerCase();
        // checks if char is already in the set
        if (chars.has(char)) {
            console.log("key contains duplicate char");
            alert("key contains duplicate character");
            return false;
        }
        // if all checks passed add char to set
        chars.add(char);
    }
    return true;
}


function encrypt_char(c, key)
{   
    // check char is alphabet char
    if (c.match(/[a-z]/i))
    {
        // check case and assign relevent base char
        const base = c.toUpperCase() === c ? 'A' : 'a';
        // get ascii value of base char
        const baseAscii = base.charCodeAt(0)
        const charAscii = c.charCodeAt(0);
        const i =  charAscii - baseAscii;
        // return case matched char at correct index in the key
        return c.toUpperCase() === c ? key[i].toUpperCase() : key[i].toLowerCase();
    }
    // return none alphabet chars without alteration
    return c;
}
