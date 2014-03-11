function Test2()
{
    var bigCircle;
    var smallCircle;
    var rectangle;
     
    this.init = function()
    {
        this.setCanvas(document.getElementById("canvas"));
        this.showFps(true);
        this.setScaleFactor(2);
        this.setFpsLimit(60);
        this.background = "#004400";
        
        bigCircle = new dShape(new Circle(125), new Vector(300, 250), "#000055");
        smallCircle = new dShape(new Circle(bigCircle.shape.getRadius()*3/5), bigCircle.getPosition().add(new Vector(bigCircle.shape.getRadius()*-1.4, bigCircle.shape.getRadius()/5)), "#000055");
        rectangle = new dShape(new Rectangle(bigCircle.shape.getRadius()*1.4, smallCircle.shape.getRadius()), new Vector(0, 0), "#000055");
        rectangle.setPosition(smallCircle.getPosition().add(new Vector(rectangle.shape.getWidth()/2, rectangle.shape.getHeight()/2)));
        
        this.start();
    };
    
    this.update = function(delta)
    {
        //poligon.shape.addRotation(360/1000*delta*0.1);
    };
    
    this.draw = function(ctx)
    {
        bigCircle.draw(ctx);
        smallCircle.draw(ctx);
        rectangle.draw(ctx);
    };

    this.init();
}
Test2.prototype = new World();