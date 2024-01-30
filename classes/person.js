class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }
  static introducePeople(personArray) {
    if (!Array.isArray(personArray)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }
    for (const person of personArray) {
      if (!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.");
      }
    }
    for (const person of personArray) {
      person.introduce();
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
