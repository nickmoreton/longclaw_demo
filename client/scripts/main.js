// Example of ES6 syntax
import imported from "./imported";
import Modal from "./modal";

class Main {
  constructor() {
    this.message = 'Hello, world!';
  }
  say() {
    console.log(this.message);
  }
}

let main = new Main();
main.say();
imported();

let modal = new Modal().init();

const deleteBasketItems = document.querySelectorAll('[role="delete-basket-item"]');
deleteBasketItems.forEach(deleteBasketItem => {
  deleteBasketItem.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Delete item with id: ${deleteBasketItem.dataset.id}`);
    const csrfToken = deleteBasketItem.closest('tr').querySelector('[name="csrfmiddlewaretoken"]').value;
    fetch(`/api/basket/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
      },
      body: JSON.stringify({ id: deleteBasketItem.dataset.id })
    }).then(response => {
      const row = deleteBasketItem.closest('tr');
      row.remove();
    });
  });
});
