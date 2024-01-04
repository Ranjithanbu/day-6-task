//calculate the uber price using class

class Uber{
    constructor(vechicleModel,departurePlace,destination,distanceInKilometer,chargesPerKiloMeter){
        this.vechicleModel=vechicleModel;
        this.departurePlace=departurePlace;
        this.destination=destination;
        this.distanceInKilometer=distanceInKilometer;
        this.chargesPerKiloMeter=chargesPerKiloMeter;
        
        
    }
  
    charges(){
      return console.log(`you have to pay ${this.distanceInKilometer*this.chargesPerKiloMeter}`);
      
    }
    
   
}
const rider=new Uber("BMW","chrompet","airport",10,20);
console.log(rider);
rider.charges();