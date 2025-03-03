
// dom elements
const form = document.querySelector("form");
const input = document.getElementById("change");
const change_slider = document.getElementById("change-slider");
const get_coins_button = document.getElementById("get-coins");
const canvas_div = document.querySelector(".canvas-container");
const img = document.getElementById("mario-block");
const background = document.getElementById("mario-background");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// global variables
const bg_color = "black";

// event listeners
 get_coins_button.addEventListener("click", (event) => {
    
 });


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    console.log(input.value);
    console.log(get_coins(input.value));
});

change_slider.oninput = function () {
    input.value = this.value;
}


function clear_canvas(color=bg_color, img=false){
    if (!img){
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

function get_coins(change){
    const coins = {
        quarters: 0,
        dimes: 0,
        nickles: 0,
        pennies: 0
    }
    while(change >= 25)
    {
        change -= 25;
        coins.quarters++;
    }
    while(change >= 10)
    {
        change -= 10;
        coins.dimes++;
    }
    while(change >= 5)
    {
        change -= 5;
        coins.nickles++;
    }
    while(change >= 1)
    {
        change -= 1;
        coins.pennies++;
    }
    return coins;
}
