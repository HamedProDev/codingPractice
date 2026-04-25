//grade system using conditions 

/* 90-100 = grade A
80-89 = grade B
70-79 = grade C
60-69 = grade D
50-59 = grade E
0-49 = Failed
*/
/*marks = 10;

if(marks >= 90 && marks<=100){
    console.log('grade A');
}
else if(marks >= 80 && marks <= 89){
    console.log('grade B');
}
else if(marks >= 70 && marks <= 79){
    console.log('grade C');
}
else if(marks >= 60 && marks <= 69){
    console.log('grade D');
}
else if(marks >= 50 && marks <= 59){
    console.log('grade E');
}
else if(marks >= 0 && marks <= 49){
    console.log('Failed, please work hard and obtain marks above 49');
}

else{
    console.log('invaild marks, input correct marks !')
}
*/
// switch

let marks = 50;
let grade;
switch(true){
    case marks >=80 && marks <=100
    :grade=`grade A`;
    break;

    default
    :grade=`Invalid marks`;
}
console.log(grade)