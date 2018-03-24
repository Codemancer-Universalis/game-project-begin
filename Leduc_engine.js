/*
Leduc Engine
by Kevin Hui

we will start with everything having a rectangular hitbox
*/

class MobileEntity
{
    constructor(x, y, wid, heit)
    {
        //width and height of hitbox
        this.width = wid;
        this.height = heit;
        
        //half width and half height
        //used for collision detection
        this.xDis = wid / 2;
        this.yDis = heit / 2;
        
        //position, in pixel
        //the values are the coordinate for the center of hitbox
        this.posX = x;
        this.posY = y;
        
        //velocity, in pixel/frame
        this.veloX = 0;
        this.veloY = 0;
        
        //acceleration in pixel/frame^2
        this.accelX = 0;
        this.accelY = 0;
        
        this.airborne = false;
    }
    
    refresh()
    {
        this.posX += this.veloX;
        this.posY += this.veloY;
        
        this.veloX += this.accelX;
        this.veloY += this.accelY;
    }
}

function collisionDetection(a, b)
{
    var xCollide = false;
    var yCollide = false;
    
    //if a is the the left of b
    if(a.posX < b.posX && a.posX + a.xDis > b.posX - b.xDis)
    {
        xCollide = true;
    }
    //if a is at the right of b
    if(b.posX < a.posX && b.posX + b.xDis > a.posX - a.xDis)
    {
        xCollide = true;
    }
    
    //if a is the the top of b(y value increase from top down the screen)
    if(a.posY < b.posY && a.posY + a.yDis > b.posY - b.yDis)
    {
        yCollide = true;
    }
    //if a is at the bottom of b
    if(b.posY < a.posY && b.posY + b.yDis > a.posY - a.yDis)
    {
        yCollide = true;
    }
    
    return xCollide && yCollide;
}

class MoblieEntityUpdater
{
    
}

//test area
/*
var entity = new MobileEntity(1, 0);
console.log(entity.posX);
*/