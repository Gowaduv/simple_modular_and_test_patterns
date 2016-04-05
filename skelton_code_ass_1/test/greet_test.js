const chai = require("chai");
const expect = chai.expect;
const Greet = require(__dirname + "/../lib/greet");

const greet = new Greet();

describe("greet function", () => {
  it("should take a name as a parameter", () => {
  });
  it("should respond with 'Hello '", () => {
    expect(greet.response("Kris")).to.contain("Hello");
  })
});
