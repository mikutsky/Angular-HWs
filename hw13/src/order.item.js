class OrderItem {
  constructor(itemName, count, price) {
    this.itemName = itemName;
    this.count = count;
    this.price = price;
    this._wat = 0.17;
  }

  get total() {
    return this.count * this.price + this.count * this.price * this._wat;
  }
}

module.exports = OrderItem;
