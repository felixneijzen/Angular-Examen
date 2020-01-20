import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class ProductService {
  constructor() {}

  getAllProducts() {
    var product1: Product = {
      name: "Laptop",
      brand: "hp",
      description: "hp pavilion",
      price: 1200
    };
    var product2: Product = {
      name: "Muis",
      brand: "Logitech",
      description: "Logitech M 560",
      price: 30
    };
    var products = [product1, product2];
    return products;
  }
}
