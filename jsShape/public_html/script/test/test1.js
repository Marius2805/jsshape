function Test1()
{
    var poligon;
    var circle;
     
    this.init = function()
    {
        this.setCanvas(document.getElementById("canvas"));
        this.showFps(true);
        this.setScaleFactor(2);
        this.setFpsLimit(60);
        this.background = "#004400";
        
        poligon = new dShape(new RegularPoligon(150, 5), new Vector(this.getWidth()/2, this.getHeight()/2), "#447711");
        circle = new dShape(new Circle(30), new Vector(1, 1), "#ff3333");
        
        this.start();
    };
    
    this.update = function(delta)
    {
        poligon.shape.addRotation(360/1000*delta*0.1);
        circle.setPosition(poligon.position.add(0,-poligon.shape.getRadiusAt(0)));
    };
    
    this.draw = function(ctx)
    {
        poligon.draw(ctx);
        circle.draw(ctx);
    };

    this.init();
}
Test1.prototype = new World();