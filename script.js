function showPopup() {
    document.getElementById("overlay").style.display = "block";
}

function hidePopup() {
    document.getElementById("overlay").style.display = "none";
}

function showSorryMessage() {
    alert("Perdão amor, essa opção não é válida.");
}

document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.envelope-flap');
    
    envelope.addEventListener('click', function() {
        flap.classList.toggle('open');
    });
});
