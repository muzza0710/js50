const input1 = document.getElementById("player-1-input");
const input2 = document.getElementById("player-2-input");
const form = document.querySelector("form");
const result_p = document.getElementById("result");

form.addEventListener("submit", (form) => {{
    form.preventDefault();
    result_p.innerText = `Player 1: ${input1.value} |   Player 2: ${input2.value}`;
}})


