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
    
    this.setPosition = function(position)
    {
        this.position = position;
    };
    
    this.setColor = function(color)
    {
        this.color = color;
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
        else if(this.shape instanceof Poligon)
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