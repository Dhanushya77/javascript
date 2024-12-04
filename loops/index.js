// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// let i=0
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i=0
// do{
//     console.log(i)
//     i++
// }
// while(i<=10)

// l=[1,2,3,4,5]
// for (i in l ){
//     console.log(i);
// }

// l=[1,2,3,4,5]
// for (i of l ){
//     console.log(i);
// }

// l={name:'anu',age:22}
// for (i in l ){
//     console.log(i);
// }

// l='welcome'
// for (i of l ){
//     console.log(i);
// }

// l='welcome'
// for (i in l ){
//     console.log(i);
// }


function even(){
    let start=parseInt(document.getElementById("a1").value);
    let end=parseInt(document.getElementById("a2").value);
    for(let i=start;i<=end;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}

function odd(){
    let start=parseInt(document.getElementById("a1").value);
    let end=parseInt(document.getElementById("a2").value);
    for(let i=start;i<=end;i++){
        if(i%2!==0){
            console.log(i)
        }
    }
}

function table(){
    let num=parseInt(document.getElementById("a1").value);
    let table=0
    for (let i=1;i<=10;i++){
        table=i*num
        console.log(i+'*'+num+'='+table)
    }
}

function rev(){
    let word=document.getElementById("a1").value;
    rev=''
    i=0
    len=word.length
    while (i<len){
        rev=word[i]+rev
        i=i+1
    }
    console.log(rev)
}

function reverse(){
    let word=document.getElementById("a1").value;
    rev=''
    for (i of word){
        rev=i+rev
    }
    console.log(rev);
    
}
