var canvas = new fabric.Canvas('myCanvas');
var playerX = 10;
var playerY = 10;
var blockWidth = 30;
var blockHeight = 30;
var playerObject = "";
var blockObject = "";

function updatePlayer() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(140);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });    
}

function updateBlock(blockImg) {
    fabric.Image.fromURL(blockImg, function(Img) {
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == 80) {
        console.log("Shift + P");
        blockHeight += 10;
        blockWidth += 10;
        document.getElementById("currentWidth").innerHTML = blockWidth;
        document.getElementById("currentHeight").innerHTML = blockHeight;
    }
    if (e.shiftKey == true && keyPressed == 77) {
        console.log("Shift + M");
        blockHeight -= 10;
        blockWidth -= 10;
        document.getElementById("currentHeight").innerHTML = blockHeight;
        document.getElementById("currentWidth").innerHTML = blockWidth;
    }
    if (keyPressed == 38) {
        up();
        console.log("up");
    }
    if (keyPressed == 40) {
        down();
        console.log("down");
    } 
    if (keyPressed == 37) {
        left();
        console.log("left");
    }
    if (keyPressed == 39) {
        right();
        console.log("right");
    }
    if (keyPressed == 67) {
        console.log("cloud img");
        updateBlock('cloud.jpg');
    }
    if (keyPressed == 68) {
        console.log("dark_green.png");
        updateBlock('dark_green.png');
    }
    if (keyPressed == 71) {
        console.log("ground.png");
        updateBlock('ground.png');
    }
    if (keyPressed == 76) {
        console.log("lightgreen");
        updateBlock('light_green.png');
    } 
    if (keyPressed == 82) {
        console.log("roof");
        updateBlock('roof.jpg');
    }
    if (keyPressed == 84) {
        console.log("trunk");
        updateBlock('trunk.jpg');
    }
    if (keyPressed == 85) {
        console.log("unique");
        updateBlock('unique.png');
    }
    if (keyPressed == 87) {
        console.log("wall");
        updateBlock('wall.jpg');
    }
    if (keyPressed == 89) {
        console.log("yellow_Wall");
        updateBlock('yellow_wall.png');
    }
}

function up() {
    if (playerY >= 0) {
        playerY -= blockHeight;
        console.log("Block height = " + blockHeight);
        console.log("Player X Position = " + playerX + "; Player Y Position = " + playerY);
        canvas.remove(playerObject);
        updatePlayer();
    }
}

function down() {
    if (playerY <= 500) {
        playerY += blockHeight;
        console.log("Block Height = " + blockHeight);
        console.log("Player X Position = " + playerX + "; Player Y Position = " + playerY);
        canvas.remove(playerObject);
        updatePlayer();
    }
}

function left() {
    if (playerX >= 0) {
        playerX -= blockWidth;
        console.log("Block Width = " + blockWidth);
        console.log("Player X Position = " + playerX + "; Player Y Position = " + playerY);
        canvas.remove(playerObject);
        updatePlayer();
    }
}

function right() {
    if (playerX <= 825) {
        playerX += blockWidth;
        console.log("Block Width = " + blockWidth);
        console.log("Player X Positon = " + playerX + "; Player Y Position = " + playerY);
        canvas.remove(playerObject);
        updatePlayer();
    }
}