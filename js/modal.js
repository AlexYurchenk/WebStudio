(() => {
    const refs = {
        mobilMenu: document.querySelector('[data-mobil-modal]'),
        openMobilMenuBtn: document.querySelector('[data-mobil-modal-open]'),
        closeMobilMenuBtn: document.querySelector('[data-mobil-modal-close]'),
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openMobilMenuBtn.addEventListener('click', toggleMobilMenu);
    refs.closeMobilMenuBtn.addEventListener('click', toggleMobilMenu);
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleMobilMenu() {
        refs.mobilMenu.classList.toggle('is-open');
        document.body.classList.toggle('model-is-open');
    }
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        document.body.classList.toggle('model-is-open');
    }
})();
