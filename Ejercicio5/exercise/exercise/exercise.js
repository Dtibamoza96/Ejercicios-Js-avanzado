const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
for (firstName in person2){
  person2.firstName = "Simon"
}

console.log(person1);
console.log(person2);

/*se modifican ambos por que se ha declarado como 
constante que tanto person2 como person1 seran 
iguales*/