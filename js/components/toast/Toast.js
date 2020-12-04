class Toast {
    /**
     * Konstruktorius inicijuojantis pranesima rodanti elementa.
     * @constructor
     */
    constructor() {
        this.selector = 'body';
        this.renderIntoParentDOM = document.querySelector(this.selector);
        this.DOM = null; // reprezentuoja pati naujaji sugeneruota elementa
        this.textDOM = null; // elementas kuriame atvaizduosime pranesima
        this.closeDOM = null; // elementas skirtas uzdaryti toast'a
        this.closeTimer = null; // laikrodis, kuris regulioja kada reikia uzdaryti pranesima
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

        this.closeTimer = setTimeout(() => {
            this.hide();
            
        }, 10000)
    }

    /**
     * Metodas pasliepantis pranesimo elementa
     */
    hide() {
        this.DOM.classList.remove('visible');
        clearTimeout(this.closeTimer);
    }

    /**
     * Metodas sugeneruojantis pranesimo elementa
     */
    render() {
        const HTML =    `<div class="toast">
                            <i class="fa fa-check"></i>
                            <i class="fa fa-shield"></i>
                            <p>Your message here...</p>
                            <i class="fa fa-times"></i>
                        </div>`;

        this.renderIntoParentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.renderIntoParentDOM.querySelector('.toast'); 
        this.textDOM = this.DOM.querySelector('p');
        this.closeDOM = this.DOM.querySelector('.fa-times');

        this.closeDOM.addEventListener('click', () => {
            this.hide();
        })
    }
}

export { Toast }