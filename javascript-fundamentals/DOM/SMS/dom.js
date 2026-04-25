
function check_grade(){

    const name = document.getElementById('name').value.trim();
    const marks = parseInt(document.getElementById('marks').value);
    const msg = document.getElementById('msg');


    if(marks >= 90 && marks <= 100){
        msg.textContent = `${name} 🧔🏽‍♂️, You have grade A `;
        msg.style.color= 'green'
    }

    else if( marks >= 80 && marks <= 89){
        msg.textContent = `${name}, You have grade B`;
        msg.style.color= 'blue'
    }
     else if( marks >= 70 && marks <= 79){
        msg.textContent = `${name}, You have grade B`;
        msg.style.color= 'yellow'
    }

     else if( marks >= 60 && marks <= 69){
        msg.textContent = `${name}, You have grade B`;
        msg.style.color= 'brown'
    }

     else if( marks >= 50 && marks <= 59){
        msg.textContent = `${name}, You have grade B`;
        msg.style.color= 'orange'
    }

     else if( marks >= 0 && marks <= 49){
        msg.textContent = `${name}, You have Failed , please work hard!`;
        msg.style.color= 'red'

    }
    else{
        msg.textContent = `Please provide valid marks!`;
    }



}