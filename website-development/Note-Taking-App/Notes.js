// Logics to hide-show note input, render notes and save notes on local storage

function show_note_detail(){
    const note_detail = document.getElementById('create');
    
    note_detail.style.display = 'flex';
}

function hide_note_detail(){
    const note_detail = document.getElementById('create');

    note_detail.style.display = 'none';

}

function create_notes(){
    const note_title = document.getElementById('title').value;
    const note_content = document.getElementById('note-content').value;
    const display_area = document.getElementById('notes-added');

    display_area.innerHTML = note_title ;
}