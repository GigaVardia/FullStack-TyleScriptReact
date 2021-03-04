function foo () {
    console.log(this);
}

foo();
let test = new foo();