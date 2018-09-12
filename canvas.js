var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth-3;
canvas.height = window.innerHeight - 7;
var c = canvas.getContext('2d');
//squares
c.fillStyle = 'rgba(125, 0, 238, 0.4)';
c.fillRect(100, 100, 150, 150);
c.fillRect(300, 100, 150, 150);
c.fillRect(300, 300, 50, 50);
c.fillRect(200, 300, 50, 50);
c.fillStyle = 'rgba(10, 50, 256, 0.5)';
c.fillRect(175, 175, 75, 75);
c.fillRect(300, 175, 75, 75);
c.fillStyle = 'rgba(10, 50, 256, 0.5)';
c.fillRect(300, 300, 25, 25);
c.fillRect(225, 300, 25, 25);
//Line
c.beginPath();
c.moveTo(300, 800);
c.lineTo(500, 1000);
c.lineTo(600, 50);
c.lineTo(700,900);
c.strokeStyle = "red";
c.stroke();
//Arc
//c.beginPath();
//c.arc(300, 500, 120, 0, Math.PI * 2, false);
//c.stroke();
c.beginPath();
c.arc(300, 650, 120, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
c.beginPath();
c.arc(150, 575, 45, 0, Math.PI * 2, false);
c.fillStyle = 'rgba(10, 50, 256, 0.5)';
c.fill();

//function to be cleaned ->
function skullgenerator (colour){
    c.fillStyle = colour;
    c.fillRect(700, 300, 150, 150);
    c.fillRect(725, 275, 100, 200);
    c.fillRect(675, 350, 200, 150);
    c.fillRect(725, 500, 100, 150);
    c.fillRect(700, 500, 150, 100);
    c.fillRect(650, 450, 50, 100);
    c.fillRect(850, 450, 50, 100);

c.fillStyle = 'white';
c.fillRect(715, 375, 50, 100);
c.fillRect(685, 400, 75, 75);
c.fillRect(785, 375, 50, 100);
c.fillRect(790, 400, 75, 75);
c.fillRect(735, 510, 25, 25);
c.fillRect(750, 510, 10, 75);
c.fillRect(745, 520, 12, 55);
c.fillRect(790, 400, 75, 75);
c.fillRect(790, 510, 25, 25);
c.fillRect(790, 510, 10, 75);
c.fillRect(793, 520, 12, 55); 
};

skullgenerator('rgba(125,1,40,1)');

//skull
/*c.fillStyle = 'black';
c.fillRect(700, 300, 150, 150);
c.fillRect(725, 275, 100, 200);
c.fillRect(675, 350, 200, 150);
c.fillRect(725, 500, 100, 150);
c.fillRect(700, 500, 150, 100);
c.fillRect(650, 450, 50, 100);
c.fillRect(850, 450, 50, 100);

c.fillStyle = 'white';
c.fillRect(715, 375, 50, 100);
c.fillRect(685, 400, 75, 75);
c.fillRect(785, 375, 50, 100);
c.fillRect(790, 400, 75, 75);
c.fillRect(735, 510, 25, 25);
c.fillRect(750, 510, 10, 75);
c.fillRect(745, 520, 12, 55);
c.fillRect(790, 400, 75, 75);
c.fillRect(790, 510, 25, 25);
c.fillRect(790, 510, 10, 75);
c.fillRect(793, 520, 12, 55); 
*/

console.log(canvas);
//for loop - call what ever is inside multiple times
for (var i = 0; i < 1500; i++) {
    var x = Math.random() * window.innerHeight;
    var y = Math.random() * window.innerWidth;
    var alpha = Math.random() / 10;
    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, false);
   // c.strokeStyle = 'rgba(10, 20, 256,' + o + ')';
    c.fillStyle = 'rgba(10, 20, 256,' + alpha + ')';
    //c.stroke();
    c.fill();
}
