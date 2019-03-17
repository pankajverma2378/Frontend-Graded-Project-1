var supModal = document.getElementById('supModal');
var sinModal = document.getElementById('sinModal');
var create = document.getElementById('createModal');
window.onclick = function(event){
    if(event.target == supModal || event.target == sinModal  || event.target == create)
    {
        supModal.style.display = "none";
        sinModal.style.display = "none";
        create.style.display ="none";
    }
}

function signUp(){
    supModal.style.display = "flex";
}

function closeSignUp(){
    document.getElementById('supModal').style.display = 'none';
}

function closeSignIn(){
    document.getElementById('sinModal').style.display = 'none';
}

function signIn(){
    sinModal.style.display = "flex";
}

function transfer(){
    sinModal.style.display = "none";
    supModal.style.display = "flex";
}
