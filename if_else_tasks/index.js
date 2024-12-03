function bonus(){
   let per=0.05
   let salary=parseInt(document.getElementById("sal").value);
   let year=parseInt(document.getElementById("year").value);
   if (year>5){
      result=document.getElementById("res").innerHTML="bonus:"+(salary*0.05);
   }
      
   else{
      result=document.getElementById("res").innerHTML="No Bonus"
   }
}

function divisiblity(){
   digit=parseInt(document.getElementById("dig").value);
   let last_digit=digit%10
   if (last_digit%3 == 0){
       result=document.getElementById("res").innerHTML="Divisible by 3"
   }
    else{
       result=document.getElementById("res").innerHTML="Not divisible"
    }
        
}
function bill(){
   unit=parseInt(document.getElementById("unit").value)
   if (unit<=100){
      result=document.getElementById("res").innerHTML="No charge"
   }
   else if (100<unit<=200){
      cost=(unit-100)*5
      result=document.getElementById("res").innerHTML="cost:"+(cost)
   }
   else{
      cost=(unit-200)*10
      result=document.getElementById("res").innerHTML="cost:"+(cost+500)
   }   
}

function monument(){
   city=document.getElementById("city").value
   if (city=="delhi"){
      result=document.getElementById("res").innerHTML="Red Fort"
   }
   else if (city=="agra"){
      result=document.getElementById("res").innerHTML="Taj Mahal"
   }
   else if (city=="jaipur"){
      result=document.getElementById("res").innerHTML="Jal Mahal"
   }
   else{
      result=document.getElementById("res").innerHTML="Invalid"
   }

}

function day(){
no=parseInt(document.getElementById('no').value)
 if (no==1){
   result=document.getElementById("res").innerHTML="SUNDAY"
 }
 else if (no==2){
   result=document.getElementById("res").innerHTML="MONDAY"
 }
 else if (no==3){
   result=document.getElementById("res").innerHTML="TUESDAY"
 }
 else if (no==4){
   result=document.getElementById("res").innerHTML="WEDNESDAY"
 }
 else if (no==5){
   result=document.getElementById("res").innerHTML="THURSDAY"
 }
 else if (no==6){
   result=document.getElementById("res").innerHTML="FRIDAY"
 }
 else if (no==7){
   result=document.getElementById("res").innerHTML="SATURDAY"
 }
 else{
   result=document.getElementById("res").innerHTML="Invalid"
 }
}

function tax(){
 cp=parseInt(document.getElementById("cp").value)
 if (cp<=50000){
   tax=0.05*cp
   result=document.getElementById("res").innerHTML="tax:"+(tax)

 }
 else if (50000<cp<=100000){
   tax=0.1*cp
   result=document.getElementById("res").innerHTML="tax:"+(tax)
 }
 else{
   tax=0.15*cp
   result=document.getElementById("res").innerHTML="tax:"+(tax)

 }
     
}