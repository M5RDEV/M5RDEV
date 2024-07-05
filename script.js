function togglePopupMessage() {
    const popupMessage = document.getElementById('popupMessage');
    if (popupMessage.classList.contains('show-popup')) {
        popupMessage.classList.remove('show-popup');
    } else {
        popupMessage.classList.add('show-popup');
        setTimeout(() => {
            popupMessage.classList.remove('show-popup');
        }, 10000);
    }
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector('.toggle-dark-mode i');
    const profileImage = document.getElementById('profile-image');
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        profileImage.src = 'img/avatar.png';
    } else {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        profileImage.src = 'img/dark-avatar.png';
    }
}