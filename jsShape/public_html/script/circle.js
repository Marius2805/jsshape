function Circle(radius)
{
    this.radius;
    this.rotation;
    
    this.init = function(radius)
    {
        this.radius = radius;
        this.rotation = 0;
    };
    
    this.getRadius = function()
    {
        return this.radius;
    };
    
    this.setRadius = function(radius)
    {
        this.radius = radius;
    };
    
    this.getRotation = function()
    {
        return this.rotation;
    };
    
    this.setRotation = function(rotation)
    {
        this.rotation = rotation;
    };
    
    this.addRotation = function(rotation)
    {
        this.rotation+=rotation;
    };
    
    
    this.init(radius);
}