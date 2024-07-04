let cart = [];
let total = 0;

function addToCart(product, price, qtyId) {
  const qty = document.getElementById(qtyId).value;
  if (qty > 0) {
    cart.push({ product, price, qty });
    updateCart();
  } else {
    alert('Please enter a valid quantity');
  }
}

function updateCart() {
  let cartText = '';
  total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    cartText += `${item.product} - ${item.qty} x ${item.price} = ${itemTotal.toFixed(2)}\n`;
    total += itemTotal;
  });
  document.getElementById('carts').value = cartText;
  document.getElementById('total').value = total.toFixed(2);
  calculateChange();
}

function calculateChange() {
  const cash = document.getElementById('cash').value;
  const change = cash - total;
  document.getElementById('change').value = change >= 0 ? change.toFixed(2) : '';
}
