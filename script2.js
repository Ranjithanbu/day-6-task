//finding area & circumference of the Circle

class Circle{
    constructor(radius=1.0,color="red"){
        this.radius=radius;
        this.color=color;
        
        
    }
  
   get radius1(){
       return this.radius;
   }
  
  set radius1(val){
      
   this.radius=val;
      
  }
  
  get color1(){
      
      return this.color;
  }
  
  set color1(colour){
  this.color=colour;
      
  }
   tostring(){
       return console.log(`"circle1 [radius=${this.radius},color=${this.color}]"`);
   }
  
  
    area(){
      return (Math.PI*this.radius*this.radius);
      }
    circum(){
        return  (2*Math.PI*this.radius);
    }
   
}
const circle1=new Circle();
console.log(circle1);
console.log(circle1.radius1);
circle1.radius1=5;
console.log(circle1.radius1);
console.log(circle1);
console.log(circle1.color1);
circle1.color1="blue";
console.log(circle1.color1);
console.log(circle1);
console.log(circle1. area());
console.log(circle1.circum());