// L is the average number of letters per 100 words in the text

// L = (letters / words) * 100

// S is the average number of sentences per 100 words in the text.

// S = (sentences / words) * 100

// float index = 0.0588 * L - 0.296 * S - 15.8

const textarea = document.getElementById("text-input");
const form = document.querySelector("form");
const result_para = document.getElementById("result");

form.addEventListener("submit", (form) => {
    form.preventDefault();

    let num_words = count_words(textarea.value || "");
    let num_sentences = count_sentences(textarea.value || "");
    let num_letters = count_letters(textarea.value || "");

    let l = (num_letters / num_words) * 100;
    let s = (num_sentences / num_words) * 100;
    let index = Math.round(0.0588 * l - 0.296 * s - 15.8);

    console.log(`Grade ${index}!`);
    console.log(`letters: ${num_letters}`);
    console.log(`words: ${num_words}`);
    console.log(`sentences: ${num_sentences}`);

    if (index < 1){
        result_para.innerText = "Before grade 1!"
    }
    else if (index >= 16 ){
        result_para.innerText = "Grade 16+"
    }
    else{
        result_para.innerText = `Grade ${index}!`;
    }
});

// let test = "Congratulations! Today is your day. You're off to Great Places! You're off and away!";




function count_words(text)
{   if (typeof text !== "string") return 0;
    return text.trim().split(/\s+/)?.length || 0;  // 
}

// function count_words(text) {
//     if (typeof text !== "string") return 0;
//     return text.match(/\b\w+\b/g)?.length || 0;
// }

function count_sentences(text)
{   if (typeof text !== "string") return 0;
    return text.match(/[.?!]+/g)?.length || 0;
}

// function count_sentences(text) {
//     if (typeof text !== "string") return 0;
//     return text.match(/[.?!]+/g)?.length || 0;
// }

function count_letters(text)
{
    if (typeof text !== "string") return 0;
    return text.match(/[a-z]/gi)?.length;
}

// function count_letters(text) {
//     if (typeof text !== "string") return 0;
//     return text.match(/[a-zà-ü]/gi)?.length || 0;
// }


