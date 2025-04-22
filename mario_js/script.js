const bg_img_width = 2560;
const bg_img_height = 1440
const original_ground_height = 1247;
const original_size = 50;
// dom elements
const form = document.querySelector("form");
const input = document.getElementById("height-input");
const height_slider = document.getElementById("height-slider");
const less_button = document.querySelector(".mario-less");
const more_button = document.querySelector(".mario-more");
const canvas_div = document.querySelector(".canvas-container");
const img = document.getElementById("mario-block");
const background = document.getElementById("mario-background");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// global variables
const bg_color = "black";
let ground_height = original_ground_height;
let size = original_size;
let scaling_factor = 0;
let gap = 3;
// initialise rect object
let rect = {
    x: 1,
    y: ground_height - size,
    height: size,
    width: size,
}

// event listeners
 less_button.addEventListener("click", (event) => {
    // if (!canvas_div.children.length){
    //     canvas_div.appendChild(canvas);
    //     console.log("added canvas");
    // }
    // canvas.width = 60 + (parseInt(input.value) * (rect.width * 2)) + (2 * parseInt(input.value) + (gap * rect.width) + gap);
    // canvas.height = (parseInt(input.value) * (rect.height)) + (gap * parseInt(input.value)) + 20;
    clear_canvas("red", true);
    console.log(rect);
    // ctx.drawImage(img, 10, 10, 50, 50);
    show_left_pyramid(input.value, rect, true)
 });

 more_button.addEventListener("click", (event) => {
    // if (!canvas_div.children.length){
    //     canvas_div.appendChild(canvas);
    // }
        // dynamically set canvas width
        // canvas.width = 60 + (parseInt(input.value) * (rect.width * 2)) + (2 * parseInt(input.value) + (gap * rect.width) + gap);
        // canvas.height = (parseInt(input.value) * (rect.height)) + (gap * parseInt(input.value)) + 20;
        clear_canvas("red", true);
        rect = show_left_pyramid(input.value, rect, true);
        rect.y = 10;    // reset y
        rect = show_gap(input.value, rect, gap, true);
        rect.y = 10;    // reset y
        rect = show_right_pyramid(input.value, rect, true);
        rect.y = 10;    // reset y
 });

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // if (!canvas_div.children.length){
    //     canvas_div.appendChild(canvas);
    // }

    // dynamically set canvas width
    // canvas.width = 60 + (parseInt(input.value) * (rect.width * 2)) + (2 * parseInt(input.value) + (gap * rect.width) + gap);
    // canvas.height = (parseInt(input.value) * (rect.height)) + (gap * parseInt(input.value)) + 20;
    clear_canvas("red", true);
    rect = show_left_pyramid(input.value, rect);
    rect = show_gap(input.value, rect, gap);
    rect = show_right_pyramid(input.value, rect);
});

height_slider.oninput = function () {
    input.value = this.value;
}


function show_right_pyramid(n, rect, use_img=false, color="red"){
    let x;
    rect.y = ground_height - size
    for (let i = n; i >= 0; i--){
        x = rect.x;
        for (let j = 0; j < i; j++){
            if(use_img){
                ctx.drawImage(img, x, rect.y, rect.height, rect.width);
            }
            else {
                ctx.fillStyle = color;
                ctx.fillRect(x, rect.y, rect.height, rect.width);
            }
            x += rect.width;
        }
        rect.y -= rect.height;
    }
    rect.x = x;
    return rect;
}

function show_left_pyramid(n, rect, use_img=false,color="green"){
    let x;
    rect.y = ground_height - size
    for (let i = n; i > 0; i--){
        // puts center of gap in center of canvas
        x = (n - i + 1) * rect.width + ((canvas.width / 2) - (size * n) - ((size * gap) / 2)) ;
        for (let j = 0; j < i; j++){
            if(use_img){
                ctx.drawImage(img, x, rect.y, rect.height, rect.width);
            }
            else {
                ctx.fillStyle = color;
                ctx.fillRect(x, rect.y, rect.height, rect.width);
            }
            x += rect.width;
        }
        rect.y -= rect.height;
    }
    rect.x = x;
    return rect;
}

function show_gap(n, rect, gap, use_img=false, color=bg_color){
    let x;
    // clear_canvas();
    for (let i = 0; i < n; i++){
        x = rect.x + 1;
        for (let j = 0; j < gap; j++){
            // ctx.fillStyle = color;
            // ctx.fillRect(x, rect.y, rect.height, rect.width);
            x += rect.width;
        }
        rect.y += rect.height;
    }
    rect.x = x;
    return rect
}

function clear_canvas(color=bg_color, img=false){
    canvas.width = window.innerWidth - (window.innerWidth / 20);
    scaling_factor = canvas.width / bg_img_width;
    canvas.height = bg_img_height * scaling_factor;
    ground_height = canvas.height - (canvas.height / (bg_img_height / 193));
    size = original_size * scaling_factor

    rect = {
        x: 1,
        y: ground_height - size,
        height: size,
        width: size,
    }

    
    if (!img){
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }
