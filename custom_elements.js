async function fetchHTML(path){
    let fetchResponse = await fetch(path); //fetch data from file at path
    let htmlString = await fetchResponse.text(); //get all text from file
    return htmlString; //return the HTML string. Is compatible with DOMParser.parseFromString()
}

async function main() {
    let my_header_inner_html = await fetchHTML("my-header.html");
    let my_footer_inner_html = await fetchHTML("my-footer.html");
    class MyHeader extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = my_header_inner_html;
        }
    }
    class MyFooter extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = my_footer_inner_html;
        }

        disconnectedCallback() {

        }

        static get observedAttributes() {
            return [];
        }

        attributeChangedCallback(name,oldValue,newValue) {

        }

        adoptedCallback() {

        }

    // todo
    }

    customElements.define("my-header", MyHeader);
    customElements.define("my-footer", MyFooter);
}

main();