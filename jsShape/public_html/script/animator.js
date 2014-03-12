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
        animations.add(anim);
        anim.start();
    };
     
    this.init();
}