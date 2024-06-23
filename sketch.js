function setup() {
    createCanvas(600, 600)
    background("black");
 }
 
 function craw(){
   stroket("blue");
   fill("red");
   
   if(mouseIsPrssed){
     rect(mouseX, mouseY, 20, 35);
   }
   
 }