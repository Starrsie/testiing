function setup() {
    createCanvas (500, 500, WEBGL);
    describe ('rotating coin')
}

function draw (){
    background('skyblue');

    //oribit with mouse
    orbitControl();

    //rotate arnd the y axis
    rotateY(frameCount * 0.01);

    //coin
    fill('gold');
    ellipse(0, 0, 200);
    //dollar sign
    noFill();
    stroke(0);
    strokeWeight(5);
    arc(0, -35, 70, 70, PI/2, 0);
    arc(0, 35, 70, 70, -PI/2, PI);
    
    line(-5, -80, -5, 80);
    line(5,-80,5,80);



    
}

