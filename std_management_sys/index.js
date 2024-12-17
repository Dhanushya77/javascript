let data = [{ roll_no: 1, name: 'manu', age: 18,email:'manu@gmail.com',course: "python" }, {roll_no: 2, name: 'anu', age: 22,email:'anu@gmail.com',course: "python" }, { roll_no: 3, name: 'sanu', age: 35,email:'sanu@gmail.com', course: "python" }, { roll_no: 4, name: 'tanu', age: 38,email:'tanu@gmail.com',course: "python" }];

function display(){
    let table = document.querySelector("tbody")
    table.innerHTML=''
    data.forEach((i) => {
        let tr = document.createElement("tr")
        let roll_no_td=document.createElement('td')
        roll_no_td.innerHTML=i.roll_no
        tr.appendChild(roll_no_td)
        
        let name_td=document.createElement('td');
        name_td.innerHTML=i.name
        tr.appendChild(name_td)

        let age_td=document.createElement('td');
        age_td.innerHTML=i.age
        tr.appendChild(age_td)
    
        let email_td=document.createElement('td');
        email_td.innerHTML=i.email
        tr.appendChild(email_td)

        let course_td=document.createElement('td');
        course_td.innerHTML=i.course
        tr.appendChild(course_td)

        let edit_td=document.createElement('td');
        let edit_btn=document.createElement('button')
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(i.roll_no)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)

        let delete_td=document.createElement('td');
        let delete_btn=document.createElement('button')
        delete_btn.textContent="delete"
        delete_btn.onclick=function(){
            delete_data(i.roll_no)
        }
        delete_td.appendChild(delete_btn)
        tr.appendChild(delete_td)

        table.appendChild(tr);
    });
}
document.getElementById("add_std").addEventListener('submit',function(event){
    event.preventDefault()
    const roll_no = document.getElementById('roll_no').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const email = document.getElementById('email').value
    const course = document.getElementById('course').value
    data.push({roll_no:roll_no,name:name,age:age,email:email,course:course})
    document.getElementById('roll_no').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('email').value=''
    document.getElementById('course').value=''
    display()
    console.log(data);
    
})

let edit_roll_no=''

function edit_form(roll_no){
    console.log(roll_no)
    document.getElementById("edit_std").style.display="block"
    document.getElementById("add_std").style.display="none"
    edit_data=data.find(user=>user.roll_no==roll_no)
    console.log(edit_data);
    document.getElementById("e_roll_no").value=edit_data.roll_no
    document.getElementById("ename").value=edit_data.name
    document.getElementById("eage").value=edit_data.age
    document.getElementById("e_email").value=edit_data.email
    document.getElementById("ecourse").value=edit_data.course
    edit_roll_no=edit_data.roll_no
}
document.getElementById("edit_std").addEventListener('submit',function(event){
    event.preventDefault()
    const e_roll_no = document.getElementById('e_roll_no').value
    const ename = document.getElementById('ename').value
    const eage = document.getElementById('eage').value
    const e_email = document.getElementById('e_email').value
    const ecourse = document.getElementById('ecourse').value

    data=data.map(user=>{
        if(user.roll_no==edit_roll_no){
            return{...user,roll_no:e_roll_no,name:ename,age:eage,email:e_email,course:ecourse}
        }return user
    })
    document.getElementById("edit_std").style.display='none'
    document.getElementById("add_std").style.display='block'
    display()
})
function delete_data(roll_no){
    data=data.filter(user=>{
        if(user.roll_no!=roll_no){
            return user
        }
    })
    display()
}

display()