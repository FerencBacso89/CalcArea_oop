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

const rectGeo={
    a: parseFloat(document.getElementById("aSide").value),
 //   b: parseFloat(document.getElementById("bSide").value),
  //  getABsum: function(){ return this.a+this.b},
    getRectArea: function() { return Math.pow(this.a,2)},
    getRectPrim:function() { return 4*(this.a)},
}
// menage inputfields display
const rect = (e) =>{
   const target = e.target;
   if(target.id="rectangle" || target.tagname == "img"){
        parA.style.display="block";
        
   }
}