class Stone {

    constructor(x,y){
        var options = {
            restitution : 0.8,
            friction : 0.9,
            density : 12
        }
        this.body = Bodies.rectangle(x,y,60,100,options);
        this.width = 60;
        this.height = 100;

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;


        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();
    }
}