// dom elements
const linearSearchBtn = document.getElementById("linear-search-btn");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// add event listeners
linearSearchBtn.addEventListener("click", () =>{
    console.log("clicked");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    let graph = generateArray(10, canvas.height);
    draw_graph(graph);
});

// named functions
function generateArray(len, max_height){
    const graph = new Set();
    while(graph.size < len){
        graph.add(getRndInteger(1, max_height))
    }
    return graph;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function draw_graph(list){
    let x = 1;
    ctx.fillStyle = "red";
    list.forEach(e => {
        console.log(e);
        ctx.fillRect(x, canvas.height - e, 10, canvas.height);
        x += 11;
    });
}