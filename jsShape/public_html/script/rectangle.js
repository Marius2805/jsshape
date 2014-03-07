function Rectangle(width, height)
{
    
    this.init = function(width, height)
    {
        this.addPoint(new Vector(-width/2, -height/2));
        this.addPoint(new Vector(width/2, -height/2));
        this.addPoint(new Vector(width/2, height/2));
        this.addPoint(new Vector(-width/2, height/2));
    };
    
    this.setSize = function(width, height)
    {
        var angle = this.getRotation();
        this.points[0].set(new Vector(-width/2, -height/2));
        this.points[1].set(new Vector(width/2, -height/2));
        this.points[2].set(new Vector(width/2, height/2));
        this.points[3].set(new Vector(-width/2, height/2));
        this.setRotation(angle);
    };
    
    this.setWidth = function(width)
    {
        this.setSize(width, this.getHeight());
    };
    
    this.setHeight = function(height)
    {
        this.setSize(this.getWidth(), height);
    };
    
    this.addWidth = function(width)
    {
        this.setSize(this.getWidth()+width, this.getHeight());
    };
    
    this.addHeight = function(height)
    {
        this.setSize(this.getWidth(), this.getHeight()+height);
    };
    
    this.getWidth = function()
    {
        return this.points[0].reverse().add(this.points[1]).getLength();
    };
    
    this.getHeight = function()
    {
        return this.points[3].subtract(this.points[0]).getLength();
    };
    
    this.getRotation = function()
    {
        return this.points[1].subtract(this.points[0]).getAngle()-90;
    };
    
    
    this.init(width, height);
}
Rectangle.prototype = new Poligon();