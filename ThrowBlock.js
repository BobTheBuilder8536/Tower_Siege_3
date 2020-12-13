class ThrowBlock{
    constructor(x,y){

        var options = {
            restitution: 0.5,
            density: 1,
            friction: 1
        }

        this.image = loadImage("circle.png");

        this.body = Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        rotate(angle);
        image(this.image,0,0,40,40);
        pop();
    }
}