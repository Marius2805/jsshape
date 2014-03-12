function Polygon()
{
    this.points;
    
    this.init = function()
    {
        this.points = new Array();
    };
    
    this.addPoint = function(point)
    {
        if(point !== undefined)
        {
            if(point instanceof Point)
            {
                this.points.add(point.toVector());
            }
            else
            {
                this.points.add(point);
            }
        }
    };
    
    this.getCenter = function()
    {
        var center = new Vector(0,0);
        for(var i = 0; i<this.points.length; i++)
        {
            center = center.add(this.points[i]);
        }
        center = center.divide(this.points.length);
        return(center);
    };
    
    this.getRotation = function()
    {
        return this.points[0].getAngle();
    };
    
    this.resetRotation = function()
    {
        this.setRotation(0);
    };
    
    this.setRotation = function(d)
    {
        var rotation = this.getRotation();
        for(var i = 0; i<this.points.length; i++)
        {
            this.points[i] = this.points[i].addAngle(-rotation+d);
        }
    };
    
    this.addRotation = function(d)
    {
        for(var i = 0; i<this.points.length; i++)
        {
            this.points[i] = this.points[i].addAngle(d);
        }
    };
    
    this.init();
}