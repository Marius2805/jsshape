function Test1()
{
    var polygon;
    var circle;
     
    this.init = function()
    {
        this.defaultinit();
        this.setCanvas(document.getElementById("canvas"));
        this.showFps(true);
        this.setBackground("#004400");
        
        polygon = new dShape(new RegularPolygon(150, 5), new Vector(this.getWidth()/2, this.getHeight()/2), "#447711");
        circle = new dShape(new Circle(30), new Vector(1, 1), "#ff3333");
        this.getAnimator().rotate(polygon, 2*360, 10000);
        
        this.start();
    };
    
    this.update = function(delta)
    {
        //polygon.addRotation(360/1000*delta*0.1);
        circle.setPosition(polygon.position.add(0,-polygon.shape.getRadiusAt(0)));
    };
    
    this.draw = function(ctx)
    {
        polygon.draw(ctx);
        circle.draw(ctx);
    };

    this.init();
}
Test1.prototype = new World();