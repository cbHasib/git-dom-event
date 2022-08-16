const deleteConfirm = document.getElementById('delete-confirm');

deleteConfirm.addEventListener('keyup', function(event){
    // document.getElementById('secret-info').style.display = 'none';
    const deleteBtn = document.getElementById('btn-delete');

    const text = event.target.value;
    // console.log(text);
    
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }

    
})