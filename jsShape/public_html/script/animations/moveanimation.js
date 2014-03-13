function MoveAnimation(object, vector, time)
{
    this.object;
    this.startpos;
    this.vector;
    this.starttime;
    this.time;
    this.started;
    this.stoped;
    this.stoptime;
    this.finished;
    this.onFinishFunction;
    this.animator;
    
    this.init = function(object, vector, time)
    {
        this.object = object;
        this.vector = vector;
        this.time = time;
        this.started = false;
        this.finished = false;
        this.stoped = false;
    };
    
    this.start = function()
    {
        this.startpos = this.object.getPosition();
        this.starttime = new Date().getTime();
        this.started = true;
        this.finished = false;
        this.stoped = false;
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
            this.object.setPosition(this.startpos.add(this.vector.multiply(percent)));
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
        
    this.init(object, vector, time);
}