let word = 'freeCodeCamp';

let check = word.includes('Co');// true
console.log(check);

// extract the part Script

let pro_la = 'JavaScript';
len = pro_la.length

let ext_part = pro_la.slice(4,pro_la.length);
let ex_part = pro_la.substring(4,pro_la.length);
let e_part = pro_la.substr(4,pro_la.length);

console.log(len+'\n'+ext_part +'\n'+ ex_part +'\n' + e_part);