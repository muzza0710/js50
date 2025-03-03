
// dom elements
const form = document.querySelector("form");
const input = document.getElementById("change");
const change_slider = document.getElementById("change-slider");
const get_coins_button = document.getElementById("get-coins");
const canvas_div = document.querySelector(".canvas-container");
const background = document.getElementById("mario-background");

const canvas = document.getElementById("coins-canvas");
const ctx = canvas.getContext("2d");


// global variables
const bg_color = "black";

const img_srcs = {
    quarters: "assets\\Quarter.png",
    dimes: "assets\\Dime.png",
    nickles: "assets\\Nickel.png",
    pennies: "assets\\Penny.png"
}

let imgs = {};
for (const key in img_srcs) {
    if (img_srcs.hasOwnProperty(key)) {
      img = document.createElement("img");
      img.src = img_srcs[key];
      imgs[key] = img;
    }
  }
// event listeners
 get_coins_button.addEventListener("click", (event) => {
    
 });


form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    clear_canvas();
    console.log(get_coins(input.value));
    draw_coins(get_coins(input.value));
});

change_slider.oninput = function () {
    input.value = this.value;
}


function clear_canvas(color=bg_color, img=false){
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

function draw_coins(coins){
    let x = 0;
    let y = 0;
    for (const key in coins) {
        if (coins.hasOwnProperty(key)) {
          if (coins[key] > 0){
            for (let i = 0; i < coins[key]; i++){
                if (x > canvas.width - 100){
                    x = 0;
                    y += 100;
                }
                ctx.drawImage(imgs[key], x, y, 100, 100);
                x += 100;
            }
          }
           
        }
      }
}
