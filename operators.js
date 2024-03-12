let a = 20;
let b = 30;

let add = a+b;
console.log({add});

let subtract = a-b;
console.log({subtract});

let division = a/b;
console.log({division});

let multiplication = a*b;
console.log({multiplication});

let c = '20';
let looselyEqualTo = a == c;
console.log({looselyEqualTo});

let strictlyEqualTo = a === c;
console.log({strictlyEqualTo});

let looselyNotEqualTo = a!=c;
console.log({looselyNotEqualTo});

let strictlyNotEqualTo = a!==c;
console.log({strictlyNotEqualTo});

 a+= 5;
console.log({a});
//decrement by one
a--;
console.log({a});
//incremennt by one
a++;
console.log({a});

//implicit coercion
console.log({c});
let d =+c;
console.log({d});
console.log({c});

let e = c*1;
console.log({e});

//explicit coercion
let f = Number(c);
console.log({f});



