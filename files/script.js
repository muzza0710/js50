const encryptInput = document.getElementById('fileInput-encrypt');
const decryptInput = document.getElementById('fileInput-decrypt');
const fileContent = document.getElementById('fileContent');
const downloadLink = document.getElementById('downloadLink');
const encryptKeyInput = document.getElementById('encrypt-key');
const decryptKeyInput = document.getElementById('decrypt-key');

encryptInput.addEventListener('input', (event) => {
  const file = event.target.files[0]; // Get the selected file
  if (!file) {
    console.error('No file selected');
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    // Set the content of the <p> tag to the file's text
    let result = e.target.result;
    const encrypted_text = encrypt_text(result, parseInt(encryptKeyInput.value))
    fileContent.textContent = encrypted_text;

    // Create a Blob from the text
    const blob = new Blob([encrypted_text], { type: 'text/plain' });

    // Generate a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Set the download link's href and filename
    downloadLink.href = url;
    downloadLink.download = 'modified_text.txt'; // Set the filename
    downloadLink.style.display = 'block'; // Show the download link

    // Trigger the download automatically
    downloadLink.click();

    // Revoke the URL to free up memory
    URL.revokeObjectURL(url);

    console.log(result);
  };

  reader.onerror = (e) => {
    console.error('Error reading file:', e.target.error);
  };

  reader.readAsText(file); // Read the file as text
});


function encrypt_text(text, key, decrypt=false){
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
            let encodedChar = decrypt === false ? (c - baseCode + key) % 26 + baseCode : (c - baseCode - key + 26) % 26 + baseCode ;
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

decryptInput.addEventListener('input', (event) =>{
    console.log('decrypting');
    const file = event.target.files[0]; // Get the selected file
  if (!file) {
    console.error('No file selected');
    return;
  }

  const key = parseInt(decryptKeyInput.value);
  const reader = new FileReader();

  reader.onload = (e) => {
    // Set the content of the <p> tag to the file's text
    let result = e.target.result;
    const encrypted_text = encrypt_text(result, key, true)
    fileContent.textContent = encrypted_text;
    console.log(result);
    event.target.value = '';
  }

  reader.onerror = (e) => {
    console.error('Error reading file:', e.target.error);
  };

  reader.readAsText(file); // Read the file as text
});

