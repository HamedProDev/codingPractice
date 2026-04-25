// star patterns

for(num = 1; num<10;num++){
    for(num2=num; num2<=10;num2++){
        document.writeln('&nbsp;');

    }for(num2=1; num2<=num*2-1; num2++){
        document.write('*');
    }document.write('<br>')
}

for(x=1; x<=10; x++){
    for(y=1;y<=x;y++){
        document.writeln('&nbsp')
    }for(y=20; y>=x*2;y--){
        document.write('*');
    }document.write('<br>');
}