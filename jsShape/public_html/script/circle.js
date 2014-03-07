function Circle(radius)
{
    this.radius;
    
    this.init = function(radius)
    {
        this.radius = radius;
    };
    
    this.getRadius = function()
    {
        return this.radius;
    };
    
    this.setRadius = function(radius)
    {
        this.radius = radius;
    };
    
    
    this.init(radius);
}