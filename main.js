function preload() {

}



function setup() {
    canvas = createCanvas(640, 480)
    canvas.position(110, 300)
    video = createCapture(VIDEO)
    video.hide()
    
}

function draw() {
    image(video,0,0,640,480)
    fill("red"); stroke("yellow");
circle(30, 30, 20);
circle(30, 180, 20);
circle(30, 330, 20);
circle(30, 480, 20);
fill("purple"); stroke("blue");
circle(180, 480, 20);
circle(330, 480, 20);
circle(480, 480, 20);
circle(630, 480, 20);
fill("green"); stroke("pink");
circle(630, 330, 20);
circle(630, 180, 20);
circle(630, 30, 20);
fill("orange"); stroke("black");
circle(480, 30, 20);
circle(330, 30, 20);
circle(180, 30, 20);
    }

    function take_snapshot(){
        save("my_picture.png")
    }