function Circle(x, y, radius)
{
    this.x;
    this.y;
    this.radius;
    
    this.init = function(x, y, radius)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
    };
    
    this.init(x, y, radius);
}