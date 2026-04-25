document.write('<pre>');


// upright right-angled star patterns triangle

for(num = 1; num<=10;num++){
    for(num2=1; num2<=num;num2++){
        document.write('*')

    }document.write('<br>')
}

document.write('<br>');
// uprigth right-angledstar  patterns triangle
for(num = 1; num<=10;num++){
    for(num2=1; num2<=num; num2++){
        document.write('&nbsp;')

    }for(num2 = num; num2<=10; num2++){
        document.write('*');

    }document.write('<br>');
}

document.write('<br>');

// inverted right angled star patterns triangle

for(num = 1; num<=10;num++){
    for(num2=num; num2<=10;num2++){
        document.write('*')

    }document.write('<br>');
}

document.write('<br>');


// upward pyramid

for(num = 1; num<=10;num++){
    for(num2=num; num2<=10;num2++){
        document.write('&nbsp;')

    }for(num2 = 1; num2 <= num*2-1;num2++){
        document.write('*');
    }document.write('<br>');
}

document.write('<br>');
// inverted pyramid

for(num = 1; num<=10;num++){
    for(num2=1; num2<=num; num2++){
        document.write('&nbsp;')

    }for(num2 = 20; num2>=num*2; num2--){
        document.write('*');

    }document.write('<br>');
}

document.write('<br>');