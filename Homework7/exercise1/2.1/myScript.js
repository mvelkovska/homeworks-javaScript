let Animal={
    name:prompt("Enter name:"),
    kind:prompt("Enter kind of animal:"),
    speak: function(){
        console.log(`${this.name} the ${this.kind} says HELLO!`);
    }
}

Animal.speak();