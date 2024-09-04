var person = {
    firstName: "Maija",
    lastName: "Meikäläinen",
    age: 50,
    eyeColor: "sininen",
    address: "Puutie 1",
    telephone: "044XXXXXXX",
    printInfo: function() {
        console.log("Name: " + this.firstName + " " + this.lastName);
        console.log("Age: " + this.age);
        console.log("Eye Color: " + this.eyeColor);
        console.log("Address: " + this.address);
        console.log("Telephone: " + this.telephone);
    }
};

person.printInfo();
