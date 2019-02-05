class Loader {
    constructor(element){
        this.element = element;

        this.render();
        setTimeout(() => this.hide(), 2500);
    }

    render(){
        for(let i=0; i<6; i++){
            let dot = document.createElement('i');
            dot.textContent = ".";
            this.element.appendChild(dot);
        }
    }

    hide(){
        this.element.remove();
    }
}

const loader = new Loader(document.querySelector('.loader'));