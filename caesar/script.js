// let plaintext = "abc";
// let key = 5;
// let i = 0;
// let ciphertext = plaintext.slice();
// // encrypt each letter of plaintext with key
// while (plaintext[i] != '\0')
// {
//     ciphertext[i] = encrypt_char(plaintext[i], key);
//     i++;
// }
// printf("ciphertext: %s\n", ciphertext);


// function encrypt_char(char c, int key)
// {
//     if (isalpha(c))
//     {
//         char base = isupper(c) ? 'A' : 'a';

//         // ensures correct wrapping if c + key is passed z in alphabet
//         return (c - base + key) % 26 + base;
//     }
//     return c;
// }

// 


const textArea = document.querySelector("textarea");
const keyInput = document.getElementById("key-input");
const form = document.querySelector("form");
const result_para = document.getElementById("result");

form.addEventListener("submit", (form) => {
    form.preventDefault();
    result_para.innerText = encrypt_text(textArea.value, parseInt(keyInput.value));
    textArea.value = ""
});

function encrypt_text(text, key){
    ciphertext = text.split();
    for (let i = 0, len = text.length; i < len; i++){
        let base = text.toUpperCase().at(i) === text.at(i) ? 'A' : 'a';
        let baseCode = base.charCodeAt(0);
        // console.log(text.at(i))
        if (text.at(i).match(/[a-z]/gi)){
            // ciphertext[i] = String.fromCharCode((text.charCodeAt(i) + key - base) % 26 + base);
            let c = (text.charCodeAt(i));
            console.log(typeof(c))
            let x = (c - baseCode + key) % 26 + baseCode;
            console.log(`c: ${c}`)
            console.log(`x: ${x}`)
            console.log(`key: ${typeof(key)}`)
            console.log(`baseCode: ${baseCode}`)
            ciphertext[i] = String.fromCharCode(x)
        }
        else {
            ciphertext[i] = text.at(i);
        }
    }
    return ciphertext.join("");
}