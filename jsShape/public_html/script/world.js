function World(canvas)
{
    this.canvas;
    this.ctx;
    this.fpsCalculator = new FpsCalculator();
    this.timer;
    this.fpsLimit = 60;
    var showFps = true;
    var running = false;
    this.background = "#ffffff";
    
    this.init = function(canvas)
    {
        if(canvas !== undefined)
        {
            this.setCanvas(canvas);
            this.start();
        }
    };
    
    this.start = function()
    {
        this.fpsCalculator.addFrame();
        var object = this;
        this.timer = window.setInterval(function(){object.loop();}, 1000/this.fpsLimit);
        running = true;
    };
    
    this.stop = function()
    {
        window.clearInterval(this.timer);
        running = false;
    };
    
    this.loop = function()
    {
        this.update(this.fpsCalculator.getDelta());
        this.fpsCalculator.addFrame();
        this.ctx.fillAll(this.background, 1);
        this.draw(this.ctx);
        if(showFps)
        {
            this.ctx.fillStyle = "#000000";
            this.ctx.font = "20px Arial";
            this.ctx.fillText("FPS: " + this.fpsCalculator.getFPS(), 7, 20);
        }
    };
        
    this.update = function(delta)
    {
        
    };
    
    this.draw = function(ctx)
    {
        
    };
    
    this.setFpsLimit = function(fpsLimit)
    {
        var r = running;
        this.stop();
        this.fpsLimit = fpsLimit;
        if(r)
        {
            this.start();
        }
    };
    
    this.setCanvas = function(canvas)
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.setScaleFactor(1);
    };
    
    this.setScaleFactor = function(factor)
    {
        $(this.canvas).css("width", $(this.canvas).width());
        $(this.canvas).css("height", $(this.canvas).height());
        this.canvas.width=$(this.canvas).width()*factor;
        this.canvas.height=$(this.canvas).height()*factor;
        this.ctx.scale(factor, factor);  
    };
    
    this.showFps = function(bool)
    {
        showFps = bool;
        return showFps;
    };
    
    this.getWidth = function()
    {
        return $(this.canvas).width();
    };
    
    this.getHeight = function()
    {
        return $(this.canvas).height();
    };
    
    this.init(canvas);
}