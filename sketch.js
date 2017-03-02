function setup(){
    createCanvas(600,400);
    background(11,22,68);
}

function draw(){
    line(0,0,600,400);
    
    stroke(1,2,3);
    fill(255,0,0);
    rect(100,100,20,50);
    
    stroke(0,0,0);
    strokeWeight(4);
    fill(0,0,255);
    ellipse(50,250,40,80);
    
    fill(88,8,209);
    ellipse(350,125,80,160);
    rect(20,18,14,31);
    
    line(10,10,600,10);
    
    line(10,10,10,400);
    
    line(100,35,60,100);
}