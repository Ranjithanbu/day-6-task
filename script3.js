//person holding some details

class Person{
    constructor(name,dateOfBirth,age,height,weight,colour,place,maritalStatus,education,mobileNo,email,job){
        this.name=name;
        this.dateOfBirth=dateOfBirth;
        this.age=age;
        this.height=height;
        this.weight=weight;
        this.colour=colour;
        this.place=place;
        this.maritalStatus=maritalStatus;
        this.education=education;
        this.mobileNo=mobileNo;
        this.email=email;
        this.job=job;
        
        
    }
 
}
const person1=new Person("Gopal","20-6-2000","23",5.6,"65 kg","maaniram","aandipatti","Married","12thPass",9788996653,"gopalG@gmail.com","No job");
console.log(person1);