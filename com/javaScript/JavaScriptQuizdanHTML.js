const person = {

    name: 'Sumagusta',
    surname: 'Suma',
    pet: function () {
        
        return this.surname;
    }

};
person.pet();

function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}


document.getElementById("demo3").innerHTML = person.pet();
document.getElementById("demo4").innerHTML = foo1();
document.getElementById("demo5").innerHTML = foo2();