const botonAgregarCarro = document.querySelectorAll('.addToCart'); //seleccionar todos los botones con clase addToCart/
botonAgregarCarro.forEach((botonAgregarCarro) => {
  botonAgregarCarro.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice);
}

function addItemToShoppingCart(itemTitle, itemPrice) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );

  const filaCarroCompra = document.createElement('div');
  const contenidoCarroCompra = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div>
                <h6>${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div>
                <p>${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input type="number" value="1">
            </div>
        </div>
    </div>`;
  filaCarroCompra.innerHTML = contenidoCarroCompra;
  shoppingCartItemsContainer.append(filaCarroCompra);

}
function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
}