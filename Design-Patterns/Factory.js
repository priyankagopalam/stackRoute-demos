var Button = /** @class */ (function () {
    function Button(label) {
        this.label = label;
    }
    Button.prototype.render = function () {
        console.log("Rendering a button with label ".concat(this.label));
    };
    return Button;
}());
var Modal = /** @class */ (function () {
    function Modal(label) {
        this.label = label;
    }
    Modal.prototype.render = function () {
        console.log("Rendering a modal with label ".concat(this.label));
    };
    return Modal;
}());
var Card = /** @class */ (function () {
    function Card(content) {
        this.content = content;
    }
    Card.prototype.render = function () {
        console.log("Rendering a Card with content ".concat(this.content));
    };
    return Card;
}());
var UIComponentFactory = /** @class */ (function () {
    function UIComponentFactory() {
    }
    UIComponentFactory.createComponent = function (type, props) {
        switch (type) {
            case "button":
                return new Button(props.label);
            case "modal":
                return new Modal(props.label);
            case "card":
                return new Card(props.content);
            default:
                throw new Error("Unknown component type: ".concat(type));
        }
    };
    return UIComponentFactory;
}());
var button = UIComponentFactory.createComponent("button", { label: "Click Me" });
var modal = UIComponentFactory.createComponent("modal", { label: "Hi There" });
var card = UIComponentFactory.createComponent("card", { content: "This is a card" });
button.render();
modal.render();
card.render();
