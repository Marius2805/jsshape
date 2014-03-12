function RotationAnimation(object, deg, time, point)
{
    this.object;
    this.startdeg;
    this.deg;
    this.starttime;
    this.time;
    this.point;
    this.started;
    this.finished;
    
    this.init = function(object, deg, time, point)
    {
        this.object = object;
        this.deg = deg;
        this.time = time;
        this.point = point;
        this.started = false;
        this.finished = false;
    };
    
    this.start = function()
    {
        this.startdeg = this.object.getRotation(point);
        this.starttime = new Date().getTime();
        this.started = true;
    };
    
    this.animate = function()
    {
        if(this.hasStarted() && !this.hasFinished())
        {
            var percent = this.getPercent();
            this.object.setRotation(this.startdeg+this.deg*percent, this.point);
            if(percent >= 1)
            {
                this.finished = true;
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
        
    this.init(object, deg, time, point);
}