// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = document.querySelector('.price span')
  let priceNumber = price.innerHTML;
    // inputs have value
  console.log(priceNumber);
  let quantity = document.querySelector('.quantity input'); // remember input
  let quantityNumber = quantity.getAttribute('value');  // and getAttribute :)
  console.log(quantity);
  console.log(quantityNumber);  // now we read the total even if it's not comming from the cart...?
  Subtotal = priceNumber * quantityNumber;
  
  document.setAttribute('subtotal span', Subtotal); // Subtotal should be wrapped in span
  updateSubtotal = Subtotal
  
  //... my code went here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
