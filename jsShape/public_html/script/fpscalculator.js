FPS_AVERAGE_STABILIZATION = 50;

function FpsCalculator()
{
    this.timestamps = new Array();
    
    this.addFrame = function(time)
    {
        if(time === undefined)
        {
            this.timestamps.add(new Date().getTime());
        }
        else
        {
            this.timestamps.add(time);
        }
    };
    
    this.getFPS = function()
    {
        var fas = FPS_AVERAGE_STABILIZATION;
        if(this.timestamps.length <= FPS_AVERAGE_STABILIZATION)
        {
            fas = this.timestamps.length-1;
        }

        var sum = 0;
        for(var i = this.timestamps.length-1; i >= this.timestamps.length-fas; i--)
        {
            sum+=this.timestamps[i]-this.timestamps[i-1];
        }
        return Math.round(1000/(sum/fas));
    };
    
    this.getLastUpdate = function()
    {
        if(this.timestamps.length === 0)
        {
            return new Date().getTime();
        }
        else
        {
            return this.timestamps[this.timestamps.length-1];
        }
    };
    
    this.getDelta = function()
    {
        return new Date().getTime() - this.getLastUpdate();
    };
    
    
}