FACTOR = 2;
FPS_LIMIT = 100;

$(document).ready(function()
{
    var canvas = document.getElementById("canvas");
    canvas.width*=FACTOR;
    canvas.height*=FACTOR;
    var ctx = canvas.getContext("2d");
    ctx.scale(FACTOR, FACTOR);
    var vector = new Vector(100, 100);
    var rectangle = new Rectangle(50, 50);
    var circle = new Circle(200);
    var shape = new Poligon();
    shape.addPoint(new Point(-100,-100));
    shape.addPoint(new Point(100,-100));
    shape.addPoint(new Point(100,100));
    shape.addPoint(new Point(-100,100));
    var rpol = new RegularPoligon(100, 6);
    var fC = new FpsCalculator();
    
    window.setInterval(function(){ loop(); }, 1000/FPS_LIMIT);
    
    var loop = function()
    {
        update();
        fC.addFrame();
        draw(ctx);
    };
    
    var update = function()
    {
        var delta = fC.getDelta();
        var angle = delta/1000*360*0.5;
        vector = vector.addAngle(angle);
        vector = vector.setLength(vector.y/2+100);
        //shape.addRotation(delta/1000*360*0.1);
        rpol.addRotation(delta/1000*360*0.1);
        //rpol.addRadius(delta/1000*10);
        //rectangle.addRotation(delta/1000*360*0.1);
        //rectangle.setWidth(rpol.getInnerRadius()*2);
        //circle.setRadius(rpol.getInnerRadius());
        
    };
    
    var draw = function(ctx)
    {
        ctx.fillAll("#ffffff", 1);
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.fillText("FPS: " + fC.getFPS(), 7, 20);
//        ctx.draw(vector, 250, 250, 0, "#ff0000");
//        ctx.draw(rectangle, 250+vector.x, 250+vector.y, vector.getAngle()*-1+45, "#00ff00");
//        ctx.draw(circle, (new Vector(250, 250)).add(vector).add(vector.setAngle(vector.getAngle()*-1+45).setLength(100)).x, (new Vector(250, 250)).add(vector).add(vector.setAngle(vector.getAngle()*-1+45).setLength(100)).y, 0, "#0000ff");
        ctx.draw(rpol, 250, 250, "#ff0000");
        //ctx.draw(rectangle, 250, 250, "#0000ff");
        //ctx.draw(circle, 250, 250, "#00aa00");
    };
    
    
});
