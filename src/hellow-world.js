import { LitElement, html, css } from 'lit-element';

export class HellowWorld extends LitElement {

    static get styles() {
        return css `p{
                color: blue;
            }`

    };

    static get properties() {
        return {
            name: { type: String },
        };
    }
    constructor() {
        super();
        this.name = 'SomeBody';
    }

    render() {
        return html `
        <p>Hello, ${this.name}</p>
        `;
    }
}
customElements.define('hellow-world', HellowWorld);