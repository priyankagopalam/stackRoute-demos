interface UIComponent {
    render(): void;
}

class Button implements UIComponent {
    constructor(private label: string) { }
    render(): void {
        console.log(`Rendering a button with label ${this.label}`);
    }
}

class Modal implements UIComponent {
    constructor(private label: string) { }
    render(): void {
        console.log(`Rendering a modal with label ${this.label}`);
    }
}

class Card implements UIComponent {
    constructor(private content: string) { }
    render(): void {
        console.log(`Rendering a Card with content ${this.content}`);
    }
}

class UIComponentFactory {
    public static createComponent(type: string, props: any): UIComponent {
        switch (type) {
            case "button":
                return new Button(props.label);
            case "modal":
                return new Modal(props.label);
            case "card":
                return new Card(props.content);
            default:
                throw new Error(`Unknown component type: ${type}`);
        }
    }
}

const button = UIComponentFactory.createComponent("button", { label: "Click Me" });
const modal = UIComponentFactory.createComponent("modal", { label: "Hi There" });
const card = UIComponentFactory.createComponent("card", { content: "This is a card" });

button.render();
modal.render();
card.render();