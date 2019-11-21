const OrderItem = require("./order.item");

class Order {
  constructor() {
    this._id = Math.floor(Math.random() * 100500);
    this.orderItems = [];

    // Дискаунт должен быть только один.
    this._discount = 0;
  }

  addOrderItem(item) {
    if (item instanceof OrderItem) this.orderItems.push(item);
  }

  // ДЗ 13.
  // 1. В ордер добавить функциональность - RemoveOrder.
  removeOrderItem(index) {
    if (typeof index !== "number") throw new TypeError("Invalid type");
    if (index >= this.orderItems.length) throw new RangeError("Invalid range");
    this.orderItems.splice(index, 1);
  }

  // 2. В ордер добавить функциональность AddDiscount.
  // ЗЫ: мой метод будет возвращать установленный в итоге Discount
  addDiscount(discount) {
    // При добавлении не валидного дискаунта должен оставаться старый.
    if (typeof discount !== "number") return this._discount;

    // Дискаунт не должен превышать 100%.
    if (discount >= 100 || discount < 0) throw new RangeError("Invalid range");

    // При добавлении дискаунта, который меньше предыдущего, тоже должен оставаться старый.
    if (discount < this._discount) return this._discount;

    this._discount = discount;
    return this._discount;
  }

  // Добавить функцилнальность getTotal
  // считается общие тоталы айтемов и от общей цены отнимается процент дискаунта.
  get total() {
    const sumPrice = this.orderItems.reduce(
      (acc, item) => (acc += item.total),
      0
    );

    // Если в ордере больше 10 айтемов, а дискаунт меньше 10%, то применяется дискаунт 20%
    if (this.orderItems.length > 10 && this._discount < 10)
      return Math.round(sumPrice - sumPrice * 0.2);

    return Math.round(sumPrice - sumPrice * (this._discount / 100));
  }
}

module.exports = Order;
