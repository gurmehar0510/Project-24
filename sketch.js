const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone,iron,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(800,550);
    iron = new Iron(700,400);
    rubber1 = new Rubber(500,100,50);
    rubber2 = new Rubber(400,100,10);
    rubber3 = new Rubber(380,100,10);
    rubber4 = new Rubber(350,100,10);
    rubber5 = new Rubber(325,100,10);
    rubber6 = new Rubber(300,100,10);
    rubber7 = new Rubber(280,100,10);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    
 
}