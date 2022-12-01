// This is only a reference so far, I have to get rid of what I do not need and make what I need better


var myGamePiece;
var start_time;
var end_time;
//var diff_time;
// controls whether we want to update the canvas continously (for example when we have a moving object)
var update_continously = false;

// controls whether we want to use the arrow keys as controls
var use_arrow_controls = false;

// canvas dimensions
var x_size = 200;
var y_size = 200;

function startGame(piece_needed,comp_width, comp_height, comp_color, comp_x, comp_y) {
    myGameArea.start();

    if (piece_needed) {
        myGamePiece = new component(comp_width, comp_height, comp_color, comp_x, comp_y);
    }
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.style.background = "green";
        this.canvas.width = x_size;
        this.canvas.height = y_size;
        this.context = this.canvas.getContext("2d");

        //here we have the possibility to choose continous updates
        if (update_continously) {
            this.interval = setInterval(updateGameArea, 20);
        }
        // READ UP ON NODES TO FIND A BETTER SOLUTION
        //document.body.insertBefore(this.canvas, document.body.childNodes[4]);
        // I THINK THIS IS A BETTER SOLUTION:
        document.getElementById("can").append(this.canvas);

        // listens to key downs
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })

        // listenst to key ups
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    },


    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
}
this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
}
}
function changeCanvasColor(col){
    myGameArea.canvas.style.background = col;
    start_time = performance.now();
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();

    if (use_arrow_controls) {
        if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
        if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
        if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
        if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
        myGamePiece.newPos();
        }

    // this start_time should get out of the updateArea function
    start_time = performance.now();
}

// new random number function that returns integer within boundaries with both boundaries inclusive
function getRIntInRng(lower_bound, upper_bound) {
    return lower_bound + Math.floor(Math.random() * (upper_bound - lower_bound + 1));
}