let Animal={
    name:"Bonnie",
    kind:"dog",
    speak: function(){
        console.log(`${this.name} the ${this.kind} says HELLO!`);
    }
}

Animal.speak();