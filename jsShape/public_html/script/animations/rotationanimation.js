function RotationAnimation(object, deg, time, point)
{
    this.object;
    this.startdeg;
    this.deg;
    this.starttime;
    this.time;
    this.point;
    this.started;
    this.stoped;
    this.stoptime;
    this.finished;
    this.onFinishFunction;
    this.animator;
    
    this.init = function(object, deg, time, point)
    {
        this.object = object;
        this.deg = deg;
        this.time = time;
        this.point = point;
        this.started = false;
        this.finished = false;
        this.stoped = false;
    };
    
    this.start = function()
    {
        if(this.stoped)
        {
            this.resume();
        }
        else
        {
            this.startdeg = this.object.getRotation(point);
            this.starttime = new Date().getTime();
            this.started = true;
            this.finished = false;
            this.stoped = false;
        }
    };
    
    this.stop = function()
    {
        this.stoptime = new Date().getTime();
        this.stoped = true;
    };
    
    this.resume = function()
    {
        if(this.stoped && this.stoptime !== undefined)
        {
            this.stoped = false;
            this.starttime = new Date().getTime()-(this.stoptime-this.starttime);
        }
    };
    
    this.animate = function()
    {
        if(this.hasStarted() && !this.isStoped() && !this.hasFinished())
        {
            var percent = this.getPercent();
            this.object.setRotation(this.startdeg+this.deg*percent, this.point);
            if(percent >= 1)
            {
                this.finished = true;
                if(this.onFinishFunction !== undefined)
                {
                    this.onFinishFunction();
                }
            }
        }
    };
    
    this.getPercent = function()
    {
        if(!this.started)
        {
            return 0;
        }
        else
        {
            var p = (new Date().getTime() - this.starttime)/this.time;
            if(p > 1)
            {
                return 1;
            }
            else
            {
                return p;
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
        
    this.init(object, deg, time, point);
}