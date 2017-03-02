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
}