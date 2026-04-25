
function show_hide(){
const  attach_box = document.getElementById("attach_box");

if(attach_box.style.display == 'none' || attach_box.style.display == ''){
    attach_box.style.display = 'flex';
}
else{
    attach_box.style.display = 'none';
}

}


function hide_sett(){
    const sett = document.getElementById('sttngs');
    if(sett.style.display == 'none' || sett.style.display == ''){
        sett.style.display = 'flex';
        sett.style.boxShadow = '.3px .3px 10px '
    }
    else{
        sett.style.display = 'none'
    }
}

function model_hide(){
const  attach_box = document.getElementById("attach_box");
    attach_box.style.display = 'none';
}

function conn(){
    const sett = document.getElementById('sttngs');

    sett.style.display = 'flex'


}

function _sett(){
 
const acc_sett = document.getElementById('acc_sett');
const usage_sett = document.getElementById('usage_sett');
const data_sett = document.getElementById('data_sett');
const instru_sett = document.getElementById('instru_sett');
const api_sett = document.getElementById('api_sett');
const conn_sett = document.getElementById('conn_sett');
const pay_sett = document.getElementById('pay_sett');
const news_sett = document.getElementById('news_sett');
const sett_area = document.getElementById('sett_content');


}