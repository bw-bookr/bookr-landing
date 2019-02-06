class TopImg {
	constructor(element){
		this.element = element;
		this.render();
	}

	render(){
		animate(this.element, 'fade-in');
		this.element.setAttribute('alt', store.topImg.alt);
		this.element.setAttribute('src', store.topImg.src);
		this.element.classList.add('bookr');
	}
}

const topImg = new TopImg(document.querySelector('img'));