// switch - conditions 
/*
syntax

switch(true){
 case (condition)
 :code to be executed;
 break;
 
 case (condition)
 :code to be executed;
 break;

 default
 :code to be executed

}

*/

let marks = 94;
let grade;

switch(true){
    case (marks >= 90 && marks <= 100)
    :grade =`grade A`;
    break;

    case marks >= 80 && marks <= 89
    :grade = `grade B`;
    break;

    case marks >= 70 && marks <= 79
    :grade = `grade C`;
    break;

    case marks >=0 && marks <= 69
    :grade = `failed , try again`;
    break;

    default
    :grade = `invalid marks, double check again the marks!`
}

console.log(grade);