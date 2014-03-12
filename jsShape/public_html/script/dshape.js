function dShape(shape, position, color, lineColor, lineWidth)
{
    this.shape;
    this.position;
    this.color;
    this.lineColor;
    this.lineWidth = 1;
    
    this.init = function(shape, position, color)
    {
        this.shape = shape;
        this.position = position || new Vector(0, 0);
        this.color = color || "#ff0000";
    };
    
    this.getX = function()
    {
        return position.x;
    };
    
    this.getY = function()
    {
        return position.y;
    };
    
    this.setShape = function(shape)
    {
        this.shape = shape;
    };
    
    this.getPosition = function()
    {
        return this.position;
    };
    
    this.setPosition = function(position)
    {
        this.position = position;
    };
    
    this.setColor = function(color)
    {
        this.color = color;
    };
    
    this.addRotation = function(deg, point)
    {
        if(point === undefined || point === null)
        {
            point = this.getPosition();
        }
        else 
        {
            if(!(point instanceof Vector))
            {
                point = point.toVector();
            }
            this.setPosition(point.add(this.getPosition().subtract(point).addAngle(deg)));
        }
        this.shape.addRotation(deg);
    };
    
    this.getRotation = function(point)
    {
        if(point === undefined || point === null)
        {
            return this.shape.getRotation();
        }
        else if(point instanceof Vector)
        {
            return this.getPosition().subtract(point).getAngle();
        }
        else if(!(point instanceof Vector))
        {
            point = point.toVector();
            return this.getPosition().subtract(point).getAngle();
        }
        
    };
    
    this.setRotation = function(deg, point)
    {
        this.addRotation(deg-this.getRotation(point), point);
    };
    
    this.draw = function(ctx)
    {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.strokeStyle = this.lineColor;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.color;
        if(this.shape instanceof Vector)
        {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(this.shape.x, this.shape.y);
            ctx.closePath();
            if(this.color!==undefined)ctx.fill();
            if(this.lineColor!==undefined)ctx.stroke();
        }
        else if(this.shape instanceof Circle)
        {
            ctx.beginPath();
            ctx.arc(0,0,this.shape.radius,0,Math.PI*2);
            if(this.color!==undefined)ctx.fill();
            if(this.lineColor!==undefined)ctx.stroke();
        }
        else if(this.shape instanceof Polygon)
        {
            ctx.beginPath();
            if(this.shape.points.length>=3)
            {
                ctx.moveTo(this.shape.points[0].x,this.shape.points[0].y);
                for(var i = 1; i<this.shape.points.length; i++)
                {
                    ctx.lineTo(this.shape.points[i].x,this.shape.points[i].y);
                }
            }
            ctx.closePath();
            if(this.color!==undefined)ctx.fill();
            if(this.lineColor!==undefined)ctx.stroke();
        }
        ctx.restore();
    };
      
    this.init(shape, position, color, lineColor, lineWidth);
}