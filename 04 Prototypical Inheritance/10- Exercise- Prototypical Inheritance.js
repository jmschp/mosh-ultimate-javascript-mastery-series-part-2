// 10- Exercise- Prototypical Inheritance

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

const myHtmlElement = new HtmlElement();
console.log(myHtmlElement);

function HtmlSelectElement(...elements) {
  this.items = [...elements];
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index > -1) this.items.splice(index, 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const myHtmlSelectElement = new HtmlSelectElement();
console.log(myHtmlSelectElement);
