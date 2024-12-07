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


// different tables and conditions

// let data=[{name:'manu',age:18},{name:'anu',age:22},{name:'sanu',age:35},{name:'tanu',age:38}];
// let data1=data.filter(i=>i.age>30)
// let data2=data.filter(i=>i.age<30)
// console.log(data1);
// let table=document.querySelector("tbody");
// data1.forEach((i) => {
//     let tr = document.createElement("tr");
//     tr.innerHTML=`
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     `
//     table.appendChild(tr);
// });
// let table2=document.querySelector("#table2 tbody");
// data2.forEach((i) => {
//     let tr = document.createElement("tr");
//     tr.innerHTML=`
//     <td>${i.name}</td>
//     <td>${i.age}</td>
//     `
//     table2.appendChild(tr);
// });



let data = [{ id: 1, name: 'manu', age: 18, place: "ekm" }, { id: 2, name: 'anu', age: 22, place: "trs" }, { id: 3, name: 'sanu', age: 35, place: "klm" }, { id: 4, name: 'tanu', age: 38, place: "tvm" }];


function display() {
    let table = document.querySelector("tbody")
    table.innerHTML=''
    data.forEach((i) => {
        let tr = document.createElement("tr")
        let id_td=document.createElement('td')
        id_td.innerHTML=i.id
        tr.appendChild(id_td)
        
        let name_td=document.createElement('td');
        name_td.innerHTML=i.name
        tr.appendChild(name_td)

        let age_td=document.createElement('td');
        age_td.innerHTML=i.age
        tr.appendChild(age_td)
    
        let place_td=document.createElement('td');
        place_td.innerHTML=i.place
        tr.appendChild(place_td)

        let edit_td=document.createElement('td');
        let edit_btn=document.createElement('button')
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(i.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement('td');
        let delete_btn=document.createElement('button')
        delete_btn.textContent="delete"
        delete_btn.onclick=function(){
            delete_data(i.id)
        }
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)

        table.appendChild(tr);
    });
}

document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    const id = document.getElementById('no').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const place = document.getElementById('place').value
    data.push({id:id,name:name,age:age,place:place})
    document.getElementById('no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('place').value=''
    display()
})

let edit_id=''

function edit_form(id){
    console.log(id)
    document.getElementById("edit_form").style.display="block"
    document.getElementById("add_form").style.display="none"
    edit_data=data.find(user=>user.id==id)
    console.log(edit_data);
    document.getElementById("eno").value=edit_data.id
    document.getElementById("ename").value=edit_data.name
    document.getElementById("eage").value=edit_data.age
    document.getElementById("eplace").value=edit_data.place
    edit_id=edit_data.id
}

document.getElementById("edit_form").addEventListener('submit',function(event){
    event.preventDefault()
    const eid = document.getElementById('eno').value
    const ename = document.getElementById('ename').value
    const eage = document.getElementById('eage').value
    const eplace = document.getElementById('eplace').value

    data=data.map(user=>{
        if(user.id==edit_id){
            return{...user,id:eid,name:ename,age:eage,place:eplace}
        }return user
    })
    document.getElementById("edit_form").style.display='none'
    document.getElementById("add_form").style.display='block'
    display()
})

function delete_data(id){
    data=data.filter(user=>{
        if(user.id!=id){
            return user
        }
    })
    display()
}

display()