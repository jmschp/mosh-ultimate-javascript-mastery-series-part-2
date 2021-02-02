// 12 - Exercise - Polymorphism

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(...elements) {
  this.items = [...elements];
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index > -1) this.items.splice(index, 1);
  };
  this.render = function () {
    // let htmlOptions = "";
    // this.items.forEach((item) => {
    //   htmlOptions += `\n  <option>${item}</option>`;
    // });
    // return `<select>${htmlOptions}\n</select>`;
    return `
<select>${this.items.map((item) => `
  <option>${item}</option>`).join("")}
</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const myHtmlSelectElement = new HtmlSelectElement(1, 2, 3, 4);
console.log(myHtmlSelectElement);
// console.log(myHtmlSelectElement.render());

const myHtmlImageElement = new HtmlImageElement("http://blablabla.com/");
console.log(myHtmlImageElement);
// console.log(myHtmlImageElement.render());

const htmlArray = [myHtmlSelectElement, myHtmlImageElement];

for (let element of htmlArray) {
  console.log(element.render());
}
