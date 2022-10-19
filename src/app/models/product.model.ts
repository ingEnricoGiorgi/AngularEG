export class Product {
  private productName: string;
  private productQuantity:number;
  private productId: number;


    constructor(productName: string, productQuantity: number, productId: number) {

      this.productName = productName;
      this.productQuantity = productQuantity;
      this.productId = productId;
    }

    getproductName(): string {
      return `${this.productName}`;
    }

    getproductQuantity(): number {
      return 12 * this.productQuantity;
    }

    getproductId(): number {
      return this.productId;
    }
}
