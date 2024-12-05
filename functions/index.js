//-----------fuctions------------

function demo(a){
    console.log(a);
}
demo('hello')

function demo(a="hi"){
    console.log(a);
}
demo()

let demo1=function(a){
    console.log('nameless function',a);
}
demo1(2)

//----------arrow function-----------

let add = (a,b) => a+b
console.log(add(10,5))

let add1 = (a,b,c) => a+b+c
console.log(add1(10,5,8))

// can give multiple arguments and functions


//-----------forEach fuction------------
l=[1,2,3,4,5,6,7,8]
let data=l.forEach(element => console.log(element));

//-----------map fuction------------

let data1=l.map(a=>a*10)
console.log(data1)

//-----------filter fuction------------

let data2=l.filter(a=>a%2!=0)
console.log(data2)