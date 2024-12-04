let data=[{name:'manu',age:18},{name:'anu',age:22},{name:'sanu',age:25},{name:'tanu',age:28}];
console.log(data);
let table=document.querySelector("tbody");
for(i of data){
    let tr = document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    td1.innerHTML=i.name
    tr.appendChild(td1);
    td2.innerHTML=i.age
    tr.appendChild(td2);
    table.appendChild(tr);
}