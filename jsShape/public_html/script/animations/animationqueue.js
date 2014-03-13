function AnimationQueue()
{
    var animations;
    this.started;
    this.finished;
    this.stoped;
    this.onFinishFunction;
    this.animator;
    this.activeAnimation;
    this.infinity;
    
    this.init = function()
    {
        this.started = false;
        this.finished = false;
        this.stoped = false;
        this.infinity = false;
        this.activeAnimation = 0;
        animations = new Array();
    };
    
    this.start = function()
    {
        this.activeAnimation = 0;
        if(this.activeAnimation < animations.length)
        {
            animations[this.activeAnimation].start();
        }
        this.started = true;
        this.finished = false;
        this.stoped = false;
    };
    
    this.stop = function()
    {
        this.stoped = true;
        if(animations.length > this.activeAnimation)
        {
            animations[this.activeAnimation].stop();
        }
    };
    
    this.resume = function()
    {
        this.stoped = false;
        if(animations.length > this.activeAnimation)
        {
            animations[this.activeAnimation].resume();
        }
    };
    
    this.animate = function()
    {
        if(this.hasStarted() && !this.isStoped() && !this.hasFinished())
        {
            if(animations.length > this.activeAnimation)
            {
                if(!animations[this.activeAnimation].hasStarted())
                {
                    animations[this.activeAnimation].start();
                }
                animations[this.activeAnimation].animate();
                if(animations[this.activeAnimation].hasFinished())
                {
                    this.activeAnimation++;
                }
            }
            else if(this.infinity)
            {
                for(var i = 0; i < animations.length; i++)
                {
                    animations[i].started = false;
                }
                this.start();           
            }
            else
            {
                this.finished = true;
                if(this.onFinishFunction !== undefined)
                {
                    this.onFinishFunction();
                }
            }
        }
    };
    
    this.hasStarted = function()
    {
        return this.started;
    };
    
    this.hasFinished = function()
    {
        return this.finished;
    };
    
    this.isStoped = function()
    {
        return this.stopded;
    };
    
    this.onFinish = function(func)
    {
        this.onFinishFunction = func;
    };
    
    this.setAnimator = function(animator)
    {
        this.animator = animator;
    };
    
    this.getAnimator = function()
    {
        return this.animator;
    };
    
    this.add = function(animation)
    {
        animations.add(animation);
    };
    
    this.setInfinity = function(bool)
    {
        this.infinity = bool;
    };
    
    this.init();
}

