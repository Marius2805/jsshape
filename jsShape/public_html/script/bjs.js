String.prototype.contains = function(it)
{ 
    return this.indexOf(it) != -1; 
};

Array.prototype.add = function(element)
{ 
    return this.push(element); 
};

Array.prototype.get = function(index)
{ 
    return this[index]; 
};

Array.prototype.remove = function(object)
{
    var pos = this.indexOf(object);
    if(~pos)
    {
        this.splice(pos, 1); 
    }
};

Array.prototype.removeAt = function(index)
{ 
    this.splice(index, 1); 
};

CanvasRenderingContext2D.prototype.drawVector = function(v)
{
    if(v instanceof Vector)
    {
        this.beginPath();
        this.moveTo(0, 0);
        this.lineTo(v.x, v.y);
        this.closePath();
        this.stroke();
    }
    else
    {
        throw "wrong type";
    }
};


CanvasRenderingContext2D.prototype.draw = function(object, x, y, color){
    if(object instanceof dShape)
    {
        object.draw(this);
    }
    else if(object instanceof Vector)
    {
        this.save();
        this.translate(x, y);
        this.strokeStyle = color;
        this.lineWidth = "1";
        this.beginPath();
        this.moveTo(0, 0);
        this.lineTo(object.x, object.y);
        this.closePath();
        this.stroke();
        this.restore();
    }
    else if(object instanceof Circle)
    {
        this.save();
        this.translate(x, y);
        this.fillStyle = color;
        this.beginPath();
        this.arc(0,0,object.radius,0,Math.PI*2);
        this.fill();
        this.restore();
    }
    else if(object instanceof Poligon)
    {
        this.save();
        this.translate(x, y);
        this.fillStyle = color;
        this.beginPath();
        if(object.points.length>=3)
        {
            this.moveTo(object.points[0].x,object.points[0].y);
            for(var i = 1; i<object.points.length; i++)
            {
                this.lineTo(object.points[i].x,object.points[i].y);
            }
        }
        this.closePath();
        this.fill();
        this.restore();
    }
};

CanvasRenderingContext2D.prototype.fillAll = function(color, alpha){
    this.save();
    this.fillStyle = color;
    this.globalAlpha = alpha;
    this.fillRect(0, 0, $(this.canvas).width(), $(this.canvas).height());
    this.restore();
};