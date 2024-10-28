class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayItems() {
    return this.items.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      totalPrice: item.getTotalPrice(),
    }));
  }
}
// Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Mouse', 19.99);
const product3 = new Product(3, 'Keyboard', 49.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart items
console.log('Cart Items:', cart.displayItems());
console.log('Total Price:', cart.getTotal());

// Remove an item from the cart
cart.removeItem(2); // Remove Mouse

// Display the cart items after removal
console.log('Cart Items after removal:', cart.displayItems());
console.log('Total Price after removal:', cart.getTotal());