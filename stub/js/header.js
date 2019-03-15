var supModal = document.getElementById('supModal');
var sinModal = document.getElementById('sinModal');

window.onclick = function(event){
    if(event.target == supModal || event.target == sinModal)
    {
        supModal.style.display = "none";
        sinModal.style.display = "none";
    }
}

function signUp(){
    supModal.style.display = "block";
}

function closeSignUp(){
    document.getElementById('supModal').style.display = 'none';
}

function closeSignIn(){
    document.getElementById('sinModal').style.display = 'none';
}

function signIn(){
    sinModal.style.display = "block";
}

function transfer(){
    sinModal.style.display = "none";
    supModal.style.display = "block";
}
