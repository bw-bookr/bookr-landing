class Header {
	constructor(element){
		this.element = element;
		this.render();
	}

	render(){
		const innerWrapper = document.createElement('div');
		innerWrapper.classList.add('inner-wrapper');

		const inner_h1 = document.createElement('h1');
		inner_h1.textContent = "Bookr";
		innerWrapper.appendChild(inner_h1);
		
		const inner_p = document.createElement('p');
		inner_p.textContent = "Your next read. Right there.";
		innerWrapper.appendChild(inner_p);

		const actionLinks = document.createElement('div');
		actionLinks.classList.add('action-links');

		const learnMoreBtn = document.createElement('a');
		learnMoreBtn.classList.add('btn', 'btn-primary', 'btn-pill');
		learnMoreBtn.textContent = "Learn more";
		learnMoreBtn.setAttribute('data-scroll-to', '#features');
		learnMoreBtn.setAttribute('href', '#');

		actionLinks.append(learnMoreBtn);

		innerWrapper.appendChild(actionLinks);
		animate(innerWrapper, 'fade-up');

		this.element.appendChild(innerWrapper);
		

		
		const productBy = document.createElement('div');
		productBy.classList.add('product-by');

		const lambdaLink = document.createElement('a');
		lambdaLink.setAttribute('href', 'https://lambdaschool.com');
		lambdaLink.setAttribute('target', '_blank');

		const lambda_p = document.createElement('p');
		lambda_p.textContent = "A product by the students of:";
		lambdaLink.appendChild(lambda_p);

		const lambda_img = document.createElement('img');
		lambda_img.setAttribute('src', './img/productby.png');
		lambda_img.setAttribute('alt', 'Students of Lambda School - A Revolutionary New School That Invests In You');

		lambdaLink.appendChild(lambda_img);

		productBy.appendChild(lambdaLink);

		this.element.appendChild(productBy);
	}
}

const header = new Header(document.querySelector('header'));