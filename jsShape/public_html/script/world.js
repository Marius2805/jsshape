function World()
{
    var canvas;
    var ctx;
    var fpsCalculator;
    var animator;
    var fpsLimit;
    var showFps;
    var scaleFactor;
    var background;
    var timer;
    var running;
    //needed to resize after fullscreen
    var normalCanvasWidth;
    var normalCanvasHeight;
    
    
    this.init = function()
    {
        
        
    };
    
    this.defaultinit = function()
    {
        fpsCalculator = new FpsCalculator();
        animator = new Animator();
        this.setFpsLimit(60);
        this.showFps(false);
        this.setScaleFactor(1);
        this.setBackground("#ffffff");
        running = false;
    };
    
    this.start = function()
    {
        fpsCalculator.addFrame();
        animator.resume();
        var object = this;
        timer = window.setInterval(function(){object.loop();}, 1000/fpsLimit);
        running = true;
    };
    
    this.stop = function()
    {
        animator.stop();
        window.clearInterval(timer);
        running = false;
    };
    
    this.loop = function()
    {
        animator.animate();
        this.update(fpsCalculator.getDelta());
        fpsCalculator.addFrame();
        if(background !== undefined)
        {
            ctx.fillAll(background, 1);
        }
        this.draw(ctx);
        if(showFps)
        {
            ctx.fillStyle = "#000000";
            ctx.font = "20px Arial";
            ctx.fillText("FPS: " + fpsCalculator.getFPS(), 7, 20);
        }
    };
        
    this.update = function(delta)
    {
        
    };
    
    this.draw = function(ctx)
    {
        
    };
    
    this.setFpsLimit = function(fl)
    {
        var r = running;
        this.stop();
        fpsLimit = fl;
        if(r)
        {
            this.start();
        }
    };
    
    this.setCanvas = function(c)
    {
        canvas = c;
        ctx = canvas.getContext("2d");
        this.setScaleFactor(scaleFactor);
        normalCanvasWidth = $(canvas).width();
        normalCanvasHeight = $(canvas).height();
        var object = this;
        document.addEventListener('webkitfullscreenchange', function(){
            if(!(document.webkitIsFullScreen))
            {
                object.setSize(normalCanvasWidth, normalCanvasHeight);
            }
        });
    };
    
    this.getAnimator = function()
    {
        return animator;
    };
    
    this.setScaleFactor = function(factor)
    {
        scaleFactor = factor;
        if(canvas !== undefined)
        {
            $(canvas).css("width", $(canvas).width());
            $(canvas).css("height", $(canvas).height());
            canvas.width=$(canvas).width()*factor;
            canvas.height=$(canvas).height()*factor;
            ctx.scale(factor, factor);
        }
    };
    
    this.showFps = function(bool)
    {
        showFps = bool;
        return showFps;
    };
    
    this.getWidth = function()
    {
        return $(canvas).width();
    };
    
    this.getHeight = function()
    {
        return $(canvas).height();
    };
    
    this.setBackground = function(b)
    {
        background = b;
    };
    
    this.setSize = function(width, height)
    {
        $(canvas).css("width", width);
        $(canvas).css("height", height);
        this.setScaleFactor(scaleFactor);
    };
    
    this.setFullscreen = function(bool)
    {
        if(bool)
        {
            canvas.webkitRequestFullScreen();
            this.setSize(screen.width, screen.height);
        }
        else
        {
            canvas.webkitCancleFullScreen();
            this.setSize(normalCanvasWidth, normalCanvasHeight);
        }
    };
    
    this.isFullscreen = function()
    {
        return document.webkitIsFullScreen;
    };
    
    this.getCanvas = function()
    {
        return canvas;
    };
    
    this.isRunning = function()
    {
        return running;
    };
    
    
    this.init();
}