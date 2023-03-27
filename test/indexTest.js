const { expect } = require("chai");
const fs = require("fs");
const path = require("path");

describe("myList.html", () => {
  it("should be present", () => {
    const fileExists = fs.existsSync(
      path.resolve(__dirname, "..", "myList.html")
    );
    const errorHint =
      "Make sure you created a file called 'myList.html' in the lab directory with your HTML document in it!";

    expect(fileExists, errorHint).to.be.true;
  });
});
