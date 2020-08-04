

const generateBtn = document.getElementById("generateBtn");
const pinInput = document.getElementById("pinInput");
const numberInput = document.getElementById('numberInput');
const validInput = document.getElementById("validInput");
const invalidInput = document.getElementById("invalidInput");
const submitBtn = document.getElementById("submit");
const countBtn = document.querySelector(".action-left");
 let count = 3;


    //generate pin event  handler
       generateBtn.addEventListener('click',function(){
           let pinInputNumber = Math.floor(1000 + Math.random()*9000);
            pinInput.value = pinInputNumber;
            numberInput.value = "";
            invalidInput.style.display = "none";
            validInput.style.display = "none";
            countBtn.innerHTML = `${count} try left`;
       })

       //inputNumber function use number pad
       function inputNumbers(numbers){
           numberInput.value += numbers;
       }

       //clear all element from input fill
       function clearNumber(){
           numberInput.value = "";
           validInput.style.display= "none";
       }

       //back button function
       function backButton(){
           var exp = numberInput.value;
        numberInput.value = exp.slice(0, - 1);
            
       }
       
        //submit button event handler
       submitBtn.addEventListener('click', function(){
           if(pinInput.value == ""){
               alert("You must be generate a pin number");
           }
           else if(numberInput.value == "" || numberInput.value.length != 4){
            alert("please input 4 digit number");
            }  
             
           
           else if( pinInput.value == numberInput.value){
               console.log('match pin');
               validInput.style.display = "block";
               invalidInput.style.display = "none";
               numberInput.value = "";
               pinInput.value = "";

           }
               
           else{
               invalidInput.style.display = "block";
               numberInput.value = "";
               validInput.style.display= "none";
               
               
             if(count > 0){
                 count --;
                 countBtn.innerHTML = `${count} try left`;
                 if(count == 0){
                    pinInput.value = "";
                    count = 3;
                    }
                }
           }
     
           
       })