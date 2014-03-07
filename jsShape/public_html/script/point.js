function Point(x, y)
{
    this.x = 0;
    this.y = 0;
    
    this.init = function(x, y)
    {
        if(x !== undefined)
        {
            this.x = x;
        }
        if(y !== undefined)
        {
            this.y = y;
        }
    };
    
    this.toVector = function()
    {
        return new Vector(this.x, this.y);
    };
    
    this.init(x, y);
}
