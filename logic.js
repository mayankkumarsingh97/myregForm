// window.onclick=()=>{
// 	alert("works");
 // }


 const form=document.getElementById('form');
 form.addEventListener('submit',e=>{
       e.preventDefault();
       validate();
 });

 function validate(){
  const fname=document.getElementById('fname').value.trim();
  const fnameLen=document.getElementById('fname').value.trim().length;
  const age=document.getElementById('age').value.trim().length;
  const ageVal=document.getElementById('age').value.trim();
 
  if(fname==""){
  	alert("value can't be empty");
  }
  	else{
  		if(!isNaN(fname)){
  			alert('input must be string only :)');
  			
  		}else{

  		}
  	}
   console.log(age);
   if(ageVal==""){
   	alert('age cannot be empty')
   }
   else if(ageVal>9 || ageVal<=60){
        alert('age must be between 11 to 59');
   }	
   else if(age>=3){
   	alert("age can't be in 3 digit");
   }
   else if(isNaN(ageVal)){
          alert('Age must be number type');
   }else{
               return true;
   }


 }


 fname.addEventListener('keyup',(e)=>{
 	e.preventDefault();
 	const fnameLen=document.getElementById('fname').value.trim().length;
 	if(fnameLen>20){
 		alert('fname should not be more than 20 char');
 	}
 });