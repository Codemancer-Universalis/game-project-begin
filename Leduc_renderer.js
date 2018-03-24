/*
graphic renderer of the game
independant but related to Leduc engine
renders p5 graphics
*/

class GraphicEntity
{
    constructor(imagArray, wid, heit)
    {
        this.images = imagArray;
        
        //index of current sprite
        this.currentSprite = 0;
        
        //width and height in pixels
        this.width = wid;
        this.height = heit;
    }
    
    /**
    method for setting the sprite of this entity
    index is the index of the image in this object
    */
    setSprite(index)
    {
        
    }
    
    /**
    render method
    takes a MobileEntity to render the picture
    in a p5.js canvas
    */
    render(a)
    {
        //coordinate of top left corner
        var cornerX = a.posX - this.width / 2;
        var cornerY = a.posY - this.height / 2;
        
        image(this.images[this.currentSprite], cornerX, cornerY, this.width, this.height);
    }
}