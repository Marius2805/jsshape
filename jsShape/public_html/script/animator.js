function Animator()
{
    var animations;
    
    this.init = function()
    {
        animations = new Array();
    };
    
    this.animate = function()
    {
        for(var i = animations.length-1; i >= 0; i--)
        {
            animations[i].animate();
            if(animations[i].hasFinished())
            {
                animations.removeAt(i);
            }
        }
    };
    
    this.rotate = function(object, deg, time, point)
    {
        var anim = new RotationAnimation(object, deg, time, point);
        anim.setAnimator(this);
        animations.add(anim);
        anim.start();
        return anim;
    };
    
    this.move = function(object, vector, time)
    {
        var anim = new MoveAnimation(object, vector, time);
        anim.setAnimator(this);
        animations.add(anim);
        anim.start();
        return anim;
    };
    
    this.createQueue = function()
    {
        var queue = new AnimationQueue();
        animations.add(queue);
        return queue;
    };
    
    this.stop = function()
    {
        for(var i = 0; i < animations.length; i++)
        {
            animations[i].stop();
        }
    };
    
    this.resume = function()
    {
        for(var i = 0; i < animations.length; i++)
        {
            animations[i].resume();
        }
    };
     
    this.init();
}