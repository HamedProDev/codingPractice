/*
nested loops : Are loops inside another loops

# When the outer loop's condition is true , the inner loop runs completely
until it becames false and stop and when it becomes false ,the outer 
loop checks another condition and runs once - if the outer loop is true
again the inner runs completely again and keep repeating this until the 
outer loop becomes false



*/
document.write('<pre>')

for(let x = 1; x<= 10; x++){
    for(let y = 1; y<=x ; y++){
        document.write('*');
    }document.write('<br>');
}
document.write('<br>')

for(let x = 1; x<= 10; x++){// x = 1
    for(let y = x; y<=10 ; y++){ // y = 5
        document.write('*');
    }document.write('<br>');
}
// upward pyramid
document.write('<br>')

for(let x = 1; x<= 10; x++){ // x=5
    for(let y = x; y<=10 ; y++){
        document.write('&nbsp;');
    }
    for(let y = 1; y<=x*2-1; y++){
        document.write('*');
    }
    document.write("<br>")
}

// inverted pyramid
document.write('<br>');

for(let x = 1; x<= 10; x++){
    for(let y = 1; y<=x ; y++){
        document.write('&nbsp;');
    }for( y=20;y>=x*2;y-- ){
        document.write('*')
    }document.write('<br>');
}
document.write('<br>');