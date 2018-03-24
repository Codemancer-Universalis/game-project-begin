/*
Leduc Engine
by Kevin Hui
*/

class MobileEntity
{
    constructor(x, y)
    {
        //position, in pixel
        this.posX = x;
        this.posY = y;
        
        //velocity, in pixel/frame
        this.veloX = 0;
        this.veloY = 0;
        
        //acceleration in pixel/frame^2
        this.accelX = 0;
        this.accelY = 0;
    }
    
    referesh()
    {
        this.posX += this.veloX;
        this.posY += this.veloY;
        
        this.veloX += this.accelX;
        this.veloY += this.accelY;
    }
}

class MoblieEntityUpdater
{
    
}

//test area
/*
var entity = new MobileEntity(1, 0);
console.log(entity.posX);
*/