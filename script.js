function showSection(section) {
    document.querySelectorAll('.container').forEach(div => div.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
