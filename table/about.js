// let data=[{name:'manu',age:18},{name:'anu',age:22},{name:'sanu',age:25},{name:'tanu',age:28}];
// console.log(data);
// let table=document.querySelector("tbody");
// for(i of data){
//     let tr = document.createElement("tr");
//     let td1=document.createElement("td");
//     let td2=document.createElement("td");
//     td1.innerHTML=i.name
//     tr.appendChild(td1);
//     td2.innerHTML=i.age
//     tr.appendChild(td2);
//     table.appendChild(tr);
// }

// let data=[{name:'manu',age:18},{name:'anu',age:22},{name:'sanu',age:25},{name:'tanu',age:28}];
// console.log(data);
// let table=document.querySelector("tbody");
// for(i of data){
//     let tr = document.createElement("tr");
//     tr.innerHTML=`
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     `
//     table.appendChild(tr);
// }


// let data=[{name:'manu',age:18},{name:'anu',age:22},{name:'sanu',age:35},{name:'tanu',age:38}];
// console.log(data);
// let table=document.querySelector("tbody");
// data.forEach((i) => {
//     let tr = document.createElement("tr");
//     tr.innerHTML=`
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     `
//     table.appendChild(tr);
// });


let data=[{name:'manu',age:18},{name:'anu',age:22},{name:'sanu',age:35},{name:'tanu',age:38}];
let data1=data.filter(i=>i.age>30)
let data2=data.filter(i=>i.age<30)
console.log(data1);
let table=document.querySelector("tbody");
data1.forEach((i) => {
    let tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${i.name}</td>
    <td>${i.age}</td>
    `
    table.appendChild(tr);
});
let table2=document.querySelector("#table2 tbody");
data2.forEach((i) => {
    let tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${i.name}</td>
    <td>${i.age}</td>
    `
    table2.appendChild(tr);
});


