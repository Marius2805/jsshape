
function RegularPolygon(radius, edges)
{
    
    this.init = function(radius, edges)
    {
        this.points = new Array();
        for(var i = 0; i < edges; i++)
        {
            var v = new Vector(1,1);
            v = v.setAngle(360/edges*i);
            v = v.setLength(radius);
            this.addPoint(v);
        }
    };
    
    this.setRadius = function(radius)
    {
        for(var i = 0; i < this.points.length; i++)
        {
            this.points[i] = this.points[i].setLength(radius);
        }
    };
    
    this.addRadius = function(radius)
    {
        this.setRadius(this.getRadius()+radius);
    };
    
    this.getRadius = function()
    {
        return this.points[0].getLength();
    };
    
    this.getInnerRadius = function()
    {
        return this.points[0].add(this.points[1].subtract(this.points[0]).divide(2)).getLength();
    };
    
    this.getRadiusAt = function(deg)
    {
        deg = deg+360-this.getRotation();
        while(deg<0)
        {
            deg+=360;
        }
        var edges = this.points.length;
        var span = 360/edges;
        var alpha = deg%span;
        var gamma = (180-span)/2;
        var beta = 180-alpha-gamma;
        return this.getRadius()/(Math.sin(beta*Math.PI/180)/Math.sin(gamma*Math.PI/180));
    };
    
    this.init(radius, edges);
}
RegularPolygon.prototype = new Polygon();
