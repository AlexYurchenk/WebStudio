(() => {
    const refs = {
        mobilMenu: document.querySelector('[data-mobil-modal]'),
        openMobilMenuBtn: document.querySelector('[data-mobil-modal-open]'),
        closeMobilMenuBtn: document.querySelector('[data-mobil-modal-close]'),
    };

    refs.openMobilMenuBtn.addEventListener('click', toggleMobilMenu);
    refs.closeMobilMenuBtn.addEventListener('click', toggleMobilMenu);

    function toggleMobilMenu() {
        refs.mobilMenu.classList.toggle('is-open');
    }
})();
