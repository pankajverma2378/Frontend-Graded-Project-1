var create = document.getElementById('createModal');
hideCreateModal();

function createModal() {
    create.style.display = 'block';
}

function hideCreateModal() {
    create.style.display = 'none';
}

window.onclick = function(event)
{
    if(event.target == create)
        {
            create.style.display = "none";
        }
}