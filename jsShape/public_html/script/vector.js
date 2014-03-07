function Vector(x, y)
{
    this.x;
    this.y;
	
    this.init = function(x, y)
    {
        this.x = x;
        this.y = y;
    };
    
    this.set = function(x, y)
    {
        if(x instanceof Vector)
        {
            this.x = x.x;
            this.y = x.y;
        }
        else
        {
            this.x = x;
            this.y = y;
        }
    };
    
    this.getLength = function()
    {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    };
    
    this.setLength = function(l)
    {
        return this.clone().normalize().multiply(l);
    };
    
    this.normalize = function()
    {
        var length = this.getLength();
        if(length!==0)
        {
            return this.divide(length);
        }
        else
        {
                throw "a zero vector can't be normalized";
        }
    };
    
    this.add = function(v)
    {
        var rv = this.clone();
        if(v instanceof Vector || v instanceof Point)
        {
            rv.x = this.x + v.x;
            rv.y = this.y + v.y;
        }
        else
        {
            rv.x = this.x + v;
            rv.y = this.y + v;
        }
        return rv;
    };
    
    this.subtract = function(v)
    {
        var rv = this.clone();
        if(v instanceof Vector || v instanceof Point)
        {
            rv.x = this.x - v.x;
            rv.y = this.y - v.y;
        }
        else
        {
            rv.x = this.x - v;
            rv.y = this.y - v;
        }
        return rv;
    };
    
    this.multiply = function(v)
    {
        var rv = this.clone();
        if(v instanceof Vector || v instanceof Point)
        {
            rv.x = this.x * v.x;
            rv.y = this.y * v.y;
        }
        else
        {
            rv.x = this.x * v;
            rv.y = this.y * v;
        }
        return rv;
    };
    
    this.divide = function(v)
    {
        var rv = this.clone();
        if(v instanceof Vector || v instanceof Point)
        {
            rv.x = this.x / v.x;
            rv.y = this.y / v.y;
        }
        else
        {
            rv.x = this.x / v;
            rv.y = this.y / v;
        }
        return rv;
    };
    
    this.reverse = function()
    {
        return this.multiply(-1); 
    };
    
    this.equals = function(v)
    {
        return this.x === v.x && this.y === v.y;
    };
    
    this.clone = function()
    {
        return new Vector(this.x, this.y);
    };
    
    this.getAngle = function()
    {
        return Math.atan2(this.y,this.x)*180/Math.PI+90;
    };
    
    this.addAngle = function(d)
    {
        var rad = d*Math.PI/180;
        var cos = Math.cos(rad);
        var sin = Math.sin(rad);
        var x = this.x*cos-this.y*sin;
        var y = this.x*sin+this.y*cos;
        return new Vector(x, y);
    };
    
    this.resetAngle = function()
    {
        return this.addAngle(-this.getAngle());
    };
    
    this.setAngle = function(d)
    {
        return this.resetAngle().addAngle(d);
    };
    
    this.toString = function()
    {
      return ("x:"+this.x+" y:"+this.y+" l:"+this.getLength()+" d:"+this.getAngle());  
    };
    
    this.toPoint = function()
    {
        return new Point(this.x, this.y);
    };
    
    this.init(x, y);
}
