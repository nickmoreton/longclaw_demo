class Modal {
  constructor() {
    this.modal = document.getElementsByTagName('dialog')[0];
    this.modalOpen = document.getElementById('dialog-open');
    this.modalClose = document.getElementById('dialog-close');
  }

  open() {
    this.modal.setAttribute('open', 'true');
  }

  close() {
    this.modal.removeAttribute('open');
  }

  setContent(content) {
    this.modalContent.innerHTML = content;
  }

  init() {
    this.modalClose.addEventListener('click', () => {
      this.close();
    });
    this.modalOpen.addEventListener('click', () => {
      this.open();
    });
  }
}

export default Modal;
