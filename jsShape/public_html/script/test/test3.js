function Test3()
{
    var circle1;
    var circle2;
    var circle3;
    var circle4;
     
    this.init = function()
    {
        this.defaultinit();
        this.setCanvas(document.getElementById("canvas"));
        this.showFps(true);
        this.setBackground("#550000");
        
        circle1 = new dShape(new Circle(50), new Vector(400, 250), "#ff3333");
        circle2 = new dShape(new Circle(25), new Vector(325, 250), "#ff3333");
        circle3 = new dShape(new Circle(12.5), new Vector(287.5, 250), "#ff3333");
        circle4 = new dShape(new Circle(6.25), new Vector(268.75, 250), "#ff3333");
        this.getAnimator().rotate(circle1, 360*10, 20*1000, new Point(250, 250));
        this.getAnimator().rotate(circle2, 360*20, 20*1000, new Point(250, 250));
        this.getAnimator().rotate(circle3, 360*40, 20*1000, new Point(250, 250));
        this.getAnimator().rotate(circle4, 360*80, 20*1000, new Point(250, 250));
        
        this.start();
    };
    
    this.update = function(delta)
    {
        
    };
    
    this.draw = function(ctx)
    {
        circle1.draw(ctx);
        circle2.draw(ctx);
        circle3.draw(ctx);
        circle4.draw(ctx);
    };

    this.init();
}
Test3.prototype = new World();