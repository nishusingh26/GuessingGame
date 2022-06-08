
const submit = document.getElementById('submitBtn');
let random = Math.floor((Math.random() * 100) + 1);
console.log(random);
let counter = document.getElementById('counter');
counter.innerText = 5;

submit.addEventListener('click',function(){
    let input = document.getElementById('inputBtn').value;
    let message = document.getElementById('insertMsg');  

    if( counter.innerText <= 1){
        message.innerText = `You have Exhausted your Life 🔓`;
        if(counter.innerText ==1)
            counter.innerText --;
    }else{
        checkInput(input,message);
        counter.innerText --;
    }
});


function checkInput(input,message){
    if(input < random){
        message.innerText = `You are less than the Guessing Number`;
    }else if(input > random){
        message.innerText = `You are More than the Guessing Number`;
    }else{
        message.innerText = `You are absolutely Correct 🏆 `;
    }
}
