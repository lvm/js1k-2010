document.getElementById("c").setAttribute('height',200);;
var ctx = document.getElementById("c").getContext("2d");
ctx.translate(0, 0);
ctx.moveTo(70,70);  
ctx.beginPath();
ctx.arc(90,102,85,0,Math.PI*2,false);
ctx.fillStyle = "#FEDE58";
ctx.strokeStyle = "#000";
ctx.fill();
ctx.lineWidth=8;
ctx.stroke();  
ctx.moveTo(270,270);  
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.arc(92,115,55,0,Math.PI*2,false);
ctx.fillStyle = "#871945";
ctx.fill();
ctx.lineWidth=4;
ctx.stroke();  
ctx.moveTo(70,70);  
ctx.beginPath();
ctx.arc(92,115,56,0,Math.PI,true);
ctx.fillStyle = "#FEDE58";
ctx.strokeStyle = "#FEDE58";
ctx.fill();
ctx.stroke();  
ctx.beginPath();  
ctx.moveTo(25,115);
ctx.lineTo(149,115);
ctx.lineWidth=4;
ctx.strokeStyle = "#000";
ctx.stroke();  
ctx.moveTo(70,70);  
ctx.beginPath();
ctx.arc(100,165,25,0,Math.PI*-1.1,true);
ctx.fillStyle = "#FBC0DF";
ctx.fill();
ctx.lineWidth=4;
ctx.moveTo(270,270);  
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.arc(92,115,55,0,Math.PI,false);
ctx.lineWidth=4;
ctx.stroke();  
ctx.moveTo(70,70);  
ctx.beginPath();
ctx.arc(50,75,25,0,Math.PI*2,true);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.lineWidth=4;
ctx.stroke();  
ctx.beginPath();  
ctx.moveTo(28,89);
ctx.lineTo(72,89);
ctx.lineWidth=4;
ctx.strokeStyle = "#000";
ctx.stroke();  
ctx.moveTo(170,170);  
ctx.beginPath();
ctx.arc(60,65,10,0,Math.PI*2,true);
ctx.fillStyle = "#000";
ctx.fill();
ctx.moveTo(170,170);  
ctx.beginPath();
ctx.strokeStyle = "#000";
ctx.arc(120,75,25,0,Math.PI*2,true);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.lineWidth=4;
ctx.stroke();  
ctx.beginPath();  
ctx.moveTo(98,89);
ctx.lineTo(142,89);
ctx.lineWidth=4;
ctx.strokeStyle = "#000";
ctx.stroke();  
ctx.moveTo(170,170);  
ctx.beginPath();
ctx.arc(130,65,10,0,Math.PI*2,true);
ctx.fillStyle = "#000";
ctx.fill();
ctx.moveTo(70,70);  
ctx.beginPath();
ctx.fillStyle = "#FEDE58";
ctx.fillRect(28,91,117,22);  
ctx.strokeStyle = "#FEDE58";
ctx.fill();
ctx.stroke();  
ctx.fillStyle = "#fff";
ctx.fillRect(0, 200, 180, 100);
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
