class Person {
    constructor(firstName, lastName, birthYear){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    }
    
    getAge(){
    let date = new Date();
    return date.getFullYear() - birthYear;
    }
}
    
    const personen = [];
    
    function addPerson()
    {
    let vorname = document.getElementById("firstName").value;
    let nachname = document.getElementById("lastName").value;
    let geburtsjahr = document.getElementById("birthYear").value;

    personen.push(new Person (vorname, nachname, geburtsjahr));
    console.log (personen);
    }

    
