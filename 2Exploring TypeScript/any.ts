// let val:any = 6;
// val = "str";
// val = new Array();;

// val.doesnotexist(33);

// console.log(val);

let val:unknown = 6;
val = "str";
val = new Array();;

if (val instanceof Array) {
    val.push(33)
}

console.log(val);
