
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
    
    this.init(radius, edges);
}
RegularPoligon.prototype = new Poligon();
