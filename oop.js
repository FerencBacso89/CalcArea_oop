// OOP fundamental principles:
// Abstraction: Abstracting the essential features of an object to create a simplified model.
// Encapsulation: Bundling the data and methods that operate on the data, and restricting access to the inner workings of an object.
// Inheritance: Creating a new class from an existing class to inherit its properties and behaviors.
// Polymorphism: The ability of objects to take on multiple forms and respond differently based on their types or the context in which they are used.
// Overriding: Providing a specific implementation of a method in a subclass that is already defined in its superclass.
// Composition: Building complex objects by combining simpler objects as their parts.
// Interface: Defining a set of methods and properties that a class must implement to adhere to a contract.

// egységbe zárás           Képletek  https://www.calculat.org/hu/terulet-kerulet/
const parA = document.getElementById("paramA");
const parB = document.getElementById("paramB");
const parC = document.getElementById("paramC");
const parH = document.getElementById("paramH");
let  selectedGeoId;
class acientGeo {
   constructor(a,b,c,h){
      this.a=a;   //a side
      this.b=b;   //b side
      this.c=c;   //c side
      this.h=h;   //h Height
   }
   getA() {return this.a}
   getB() {return this.b}
   getC() {return this.c}
   geth() {return this.h}
}
class square extends acientGeo{
  constructor(a){
      super(a,a);
      this.a=parseFloat(document.getElementById("aSide").value);
   }
   getSqDiag() {return Math.sqrt(2)*this.a}   //átló
   getSqArea() {return Math.pow(this.a,2)}   //terület
   getSqPerim() {return (4*this.a)}   //kerület
}
class rectangle extends acientGeo{
   constructor(a){
      super();
      this.a=a;
      this.b= parseFloat(document.getElementById("bSide").value);
   }         
   getRectArea() {return a*this.b}   //terület
   getRectPerim() {return (2*(a+this.b))}   //kerület
}
class trinagle extends acientGeo{
   constructor(a,b,c,h){
      super();
      this.a=a;
      this.b=b;
      this.c=parseFloat(document.getElementById("cSide").value);
      this.h=parseFloat(document.getElementById("height").value);
   
   }
   
   getTriArea(){return (a*this.h)/2};
   getTriPerim(){return a + b + this.c}
}
// menage inputfields display
const geo = (e) =>{
   selectedGeoId = e.target.id;
   areaRes= document.getElementById("AreaResult");
   perimeterRes= document.getElementById("PerimResult");
   diagonalRes= document.getElementById("DiagonalResult");
   //let targetID=target.id;
  // console.log(targetID);
 /*   document.getElementById("result").style.display="none";
   document.getElementById("parameters").style.display="block"; */
      if((selectedGeoId==="square") || (selectedGeoId=== "sqimg")){
         //define result outputs field
            parA.style.display="block";
            parB.style.display="none";                                            
            parC.style.display="none";                                            
            parH.style.display="none";                                            
      }
      if((selectedGeoId==="rectangle") || (selectedGeoId==="rectimg")){         
        //define result outputs field
        areaRes= document.getElementById("AreaResult");
        perimeterRes= document.getElementById("PerimResult");
        diagonalRes= document.getElementById("DiagonalResult");
           parA.style.display="block";
           parB.style.display="block";
           parC.style.display="none";                                            
           parH.style.display="none"; 
      }
      if((selectedGeoId==="triangle") || (selectedGeoId==="triimg")){
         parA.style.display="block";
         parB.style.display="block";
         parC.style.display="block";                                            
         parH.style.display="block"; 
      }
}


calcGeo=()=>{
 //let btnID =e.target.id;
 
   if (selectedGeoId==="square" || selectedGeoId ==="sqimg"){
      
      a= parseFloat(document.getElementById("aSide").value);
      const sq= new square(a);
      //add result to labels
      let area=sq.getSqArea();
      let perim=sq.getSqPerim();
      let diagon=sq.getSqDiag();
      let geometry="Square";

      areaRes.innerText=`${geometry} Area result: ${area} unit`;
      perimeterRes.innerText=`${geometry} Perimeter result: ${perim} unit`;
      diagonalRes.innerText=`${geometry} Diagonal result: ${diagon} unit`;
      
   }
   if (selectedGeoId==="rectangle" || selectedGeoId ==="rectimg"){
    //  a= parseFloat(document.getElementById("aSide").value);
     // b=parseFloat(document.getElementById("bSide").value);
   //   alert("data a: "+a +"/" +b);
      const rect= new rectangle();
         let area=rect.getRectArea();
         let perim=rect.getRectPerim();
         let geometry="Rectangle";

         areaRes.innerText=`${geometry} Area result: ${area} unit`;
         perimeterRes.innerText=`${geometry} Perimeter result: ${perim} unit`;
         diagonalRes.innerText="";         
   }
   if (selectedGeoId==="triangle" || selectedGeoId ==="triimg"){
      a= parseFloat(document.getElementById("aSide").value);
      b=parseFloat(document.getElementById("bSide").value);
      c=parseFloat(document.getElementById("cSide").value);
      h=parseFloat(document.getElementById("height").value);
      
      const tri= new trinagle();
         let area=tri.getTriArea();
         let perim=tri.getTriPerim();
         let geometry="Triangle";
      
         areaRes.innerText=`${geometry} Area result: ${area} unit`;
         perimeterRes.innerText=`${geometry} Perimeter result: ${perim} unit`;
         diagonalRes.innerText="";         
   }
 
}


  