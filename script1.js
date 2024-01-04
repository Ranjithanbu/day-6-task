//Class - Movie


class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating;
       
        
    }
  
    getPG(){
       if(this.rating==="PG"){return[this.title]}
      
    }
    
   
}
const movies=new Movie("PS-2","lyca");
console.log(movies);
console.log(movies.getPG());


// piece of code  using class

class Movie{
        constructor(title,studio,rating){

      this.title=title;
      this.studio=studio;
      this.rating=rating;      
        }


}
const movies= new Movie("Casino Royale","Eon Productions","PG­13")

console.log(movies)