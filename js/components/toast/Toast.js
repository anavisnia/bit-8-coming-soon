class Toast {
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null; // reprezentuoja pati naujaji sugeneruota elementa
        this.textDOM = null; // elementas kuriame atvaizduosime pranesima
    }
    /**
     * 
     * @param {string} type Zinutes tipas. Vieninteliai galimi variantai: success || error.
     * @param {string} message Tekstas, kuris turi buti atvaizduotas pranesime.
     */
    show(type, message) {
        this.DOM.classList.add('visible');
        this.textDOM.innerText = message;
        
        if (type === 'succsess') {
            this.DOM.classList.remove('error')
        }
        if (type === 'error') {
            this.DOM.classList.add('error')
        }
    }
    hide() {
        this.DOM.classList.remove('visible');
    }

    // metodas kuris sukurs html elem
    render() {
        const HTML =    `<div class="toast visible">
                            <i class="fa fa-check"></i>
                            <p>Your message here...</p>
                            <i class="fa fa-times"></i>
                        </div>`;

        this.renderIntoParentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast'); 
        this.textDOM = this.renderIntoParentDOM.querySelector('p');
    }
}

export { Toast }