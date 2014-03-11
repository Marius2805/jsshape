function Test1()
{
    var poligon;
     
    this.init = function()
    {
        this.setCanvas(document.getElementById("canvas"));
        this.showFps(true);
        this.setScaleFactor(2);
        this.setFpsLimit(60);
        this.background = "#004400";
        
        
        poligon = new dShape(new RegularPoligon(150, 5), new Vector(250, 250), "#447700");
        
        this.start();
    };
    
    this.update = function(delta)
    {
        poligon.shape.addRotation(360/1000*delta*0.1);
    };
    
    this.draw = function(ctx)
    {
        poligon.draw(ctx);
    };

    this.init();
}
Test1.prototype = new World();