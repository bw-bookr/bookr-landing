class Testimonials {
	constructor(element){
		this.element = element;
		this.render();
	}

	render(){
		const container = document.createElement('div');
		container.classList.add('container');

		const row1 = document.createElement('div');
		row1.classList.add('row');

		const title = document.createElement('h2');
		title.classList.add('title');
		title.textContent = 'Testimonials';

		row1.appendChild(title);
		container.appendChild(row1);

		const row2 = document.createElement('div');
		row2.classList.add('row', 'people');

		store.testimonials.forEach(elem => this.renderTestimonial(elem, row2));

		container.appendChild(row2);
		this.element.appendChild(container);
	}

	renderTestimonial(data, selector){
		const testimonial = document.createElement('div');
		testimonial.classList.add('testimonial', 'col-sm-12', 'col-md-4');
		animate(testimonial, 'fade-up');

		const avatar = document.createElement('div');
		avatar.classList.add('avatar');

		const avatarImg = document.createElement('img');
		avatarImg.setAttribute('src', data.avatar);
		avatarImg.setAttribute('alt', data.name);
		
		avatar.appendChild(avatarImg);
		testimonial.appendChild(avatar);

		const h5 = document.createElement('h5');
		h5.textContent = data.name;
		testimonial.appendChild(h5);

		const span = document.createElement('span');
		span.textContent = data.position;
		testimonial.appendChild(span);

		const paragraph = document.createElement('p');
		paragraph.innerHTML = data.content;
		testimonial.appendChild(paragraph);

		selector.appendChild(testimonial);
	}
}

const testimonials = new Testimonials(document.querySelector('.testimonials'));