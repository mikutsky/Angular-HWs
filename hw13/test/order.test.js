const { expect } = require("chai");

const Order = require("../src/order");
const OrderItem = require("../src/order.item");

describe("Test Order functionality", () => {
  describe("Add order item functionality", () => {
    let order;

    beforeEach(() => {
      order = new Order();
    });

    afterEach(() => {
      order = null;
    });

    it("Add order item. Expect orders length increase by 1", () => {
      const item = new OrderItem("Avocado", 10, 10);

      order.addOrderItem(item);
      expect(order.orderItems.length).to.be.equals(1);
    });

    it("Add 'string'. Expect orders length increase by 0", () => {
      order.addOrderItem("str");
      expect(order.orderItems.length).to.be.equals(0);
    });
  });

  // ДЗ 13.
  // Тестируем метод removeOrderItem(index)
  describe("Remove order item functionality", () => {
    let order;

    beforeEach(() => {
      order = new Order();
      const item = new OrderItem("Avocado", 10, 10);
      order.addOrderItem(item);
    });

    afterEach(() => {
      order = null;
    });

    // попробовал новые, крутые конструкции expect(...).to.have.a.lengthOf(...)
    it("Remove order item. Expect orders length decrease by 1", () => {
      order.removeOrderItem(0);
      expect(order.orderItems).to.have.a.lengthOf(0);
    });

    // и ещё expect(...).to.throw(...)
    it("Remove order item with 'string' index. Type error: 'Invalid type'", () => {
      expect(() => order.removeOrderItem("string")).to.throw(
        TypeError,
        "Invalid type"
      );
    });

    it("Remove order item with invalid index. Return 'Invalid range'", () => {
      expect(() => order.removeOrderItem(100)).to.throw(
        RangeError,
        "Invalid range"
      );
    });
  });

  describe("AddDiscount order item functionality", () => {
    let order;

    beforeEach(() => {
      order = new Order();
    });

    afterEach(() => {
      order = null;
    });

    it("Add discount with a value of 50. Except discount 50", () => {
      const expected = 50;
      const actual = order.addDiscount(50);

      expect(actual).to.be.equal(expected);
    });

    it("Add discount with a type of value 'string'. Except discount 0", () => {
      expect(order.addDiscount("string")).to.be.equal(0);
    });

    it("Add discount with a value of 101. Except discount 0", () => {
      expect(() => order.addDiscount(101)).to.throw(
        RangeError,
        "Invalid range"
      );
    });

    it("Add discount with a value of -1. Except discount 0", () => {
      expect(() => order.addDiscount(-1)).to.throw(RangeError, "Invalid range");
    });

    it("Add discount with a value of 75, with previously added 25. Except discount 75", () => {
      order.addDiscount(25);

      const expected = 75;
      const actual = order.addDiscount(75);

      expect(actual).to.be.equal(expected);
    });

    it("Add discount with a value of 25, with previously added 75. Except discount 75", () => {
      order.addDiscount(75);

      const expected = 75;
      const actual = order.addDiscount(25);

      expect(actual).to.be.equal(expected);
    });
  });

  describe("Functionality of order items get total", () => {
    let order;

    beforeEach(() => {
      order = new Order();
    });
    afterEach(() => {
      order = null;
    });

    it("Get total of order: number of order items 10, order item price 85.47, count 10, discount 5(%). Excepted 9500", () => {
      for (let i = 0; i < 10; i++) {
        const item = new OrderItem(`Product ${i}`, 10, 85.47);
        order.addOrderItem(item);
      }
      order.addDiscount(5);

      const expected = 9500;
      const actual = order.total;

      expect(actual).to.be.equal(expected);
    });

    it("Get total of order: number of order items 11, order item price 85.47, count 10, discount 5(%). Excepted 8800", () => {
      for (let i = 0; i < 11; i++) {
        const item = new OrderItem(`Product ${i}`, 10, 85.47);
        order.addOrderItem(item);
      }
      order.addDiscount(5);

      const expected = 8800;
      const actual = order.total;

      expect(actual).to.be.equal(expected);
    });
  });
});
