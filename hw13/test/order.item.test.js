const OrderItem = require("../src/order.item");
const { expect } = require("chai");

describe("Test OrderItem functionality", () => {
  it("Create new OrderItem. Price per item 10, 10 item. Expect total 117.", () => {
    const orderItem = new OrderItem("Avocado", 10, 10);
    const expectedTotal = 117;
    const actualTotal = orderItem.total;

    expect(actualTotal).to.be.equals(expectedTotal);
  });
});
