
function RegularPoligon(radius, edges)
{
    
    this.init = function(radius, edges)
    {
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
    
    this.init(radius, edges);
}
RegularPoligon.prototype = new Poligon();
