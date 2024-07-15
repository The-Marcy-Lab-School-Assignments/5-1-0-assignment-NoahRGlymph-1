import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    constructor() {
      this.id = getId(); // Generate a unique id for the shopping cart
      this.#cartItems = []; // Initialize the cart items as a private array
    }
  
    // Private property to store cart items
    #cartItems;
  
    // Method to create a new CartItem and add it to the cart
    createItem(name, price) {
      const newItem = new CartItem(name, price);
      this.#cartItems.push(newItem);
    }
  
    // Method to get all items in the cart
    getItems() {
      return this.#cartItems;
    }
  
    // Method to remove an item from the cart based on the given id
    removeItem(id) {
      this.#cartItems = this.#cartItems.filter(item => item.id !== id);
    }
  
    // Method to get the total price of all items in the cart
    getTotal() {
      return this.#cartItems.reduce((total, item) => total + item.price, 0);
    }
    // Static method to list all ShoppingCart instances
  static listAll() {
    return [...ShoppingCart.#allCarts];
  }

  // Static method to find a ShoppingCart instance by id
  static findBy(id) {
    return ShoppingCart.#allCarts.find(cart => cart.id === id);
  }
}
  

export default ShoppingCart;