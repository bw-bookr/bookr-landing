class NewsletterPanel {
	constructor(element){
		this.element = element;

		this.render();
	}

	render(){
		const container = document.createElement('div');
		container.classList.add('container');
		animate(container, 'fade-up');

		const row1 = document.createElement('div');
		row1.classList.add('row');

		const title = document.createElement('h2');
		title.classList.add('title');
		title.textContent = 'Newsletter';

		const description = document.createElement('p');
		description.innerHTML = 'Get the best books straight to your inbox and <b>follow the magic.</b><br/>No fluff, no bullshit. We send only the greatest books once a month.<br/>Join the best community of avid readers.'

		row1.appendChild(title);
		row1.appendChild(description);
		container.appendChild(row1);

		const row2 = document.createElement('div');
		row2.classList.add('row');

		const form = document.createElement('form');
		form.classList.add('form-inline');
		form.setAttribute('action', '#');

		const formGroup = document.createElement('div');
		formGroup.classList.add('form-group');

		const newsletterEmailInput = document.createElement('input');
		newsletterEmailInput.setAttribute('type', 'email');
		newsletterEmailInput.setAttribute('id', 'newsletterEmailInput');
		newsletterEmailInput.setAttribute('placeholder', 'Email address');
		newsletterEmailInput.classList.add('form-control');

		const newsletterSubmit = document.createElement('button');
		newsletterSubmit.textContent = 'Subscribe';
		newsletterSubmit.classList.add('btn', 'btn-primary');
		newsletterSubmit.setAttribute('id', 'newsletterSubmit');
		newsletterSubmit.disabled = true;

		newsletterSubmit.addEventListener('click', (e) => {
			e.preventDefault();
			this.onSubmit();
		});

		formGroup.appendChild(newsletterEmailInput);
		formGroup.appendChild(newsletterSubmit);
		form.appendChild(formGroup);
		row1.appendChild(form);
		container.appendChild(row2);
		this.element.appendChild(container);
	}

	onSubmit(){
		const email = this.element.querySelector('#newsletterEmailInput').value;
		alert(`Your email address: ${email} is too good to be added to our newsletter. That's why we return it to you!`);

		this.element.querySelector('#newsletterEmailInput').value = "";
		this.element.querySelector('#newsletterEmailInput').classList.remove('is-valid');
		this.element.querySelector('#newsletterSubmit').disabled = true;
	}
}

const newsletter = new NewsletterPanel(document.querySelector('.newsletter'));


newsletter.element.querySelector('#newsletterEmailInput').addEventListener('change', () => {
	if(validateEmail(newsletter.element.querySelector('#newsletterEmailInput').value)){
		newsletter.element.querySelector('#newsletterEmailInput').classList.remove('is-invalid');
		newsletter.element.querySelector('#newsletterEmailInput').classList.add('is-valid');

		newsletter.element.querySelector('#newsletterSubmit').disabled = false;
	}else{
		newsletter.element.querySelector('#newsletterEmailInput').classList.remove('is-valid');
		newsletter.element.querySelector('#newsletterEmailInput').classList.add('is-invalid');
		
		newsletter.element.querySelector('#newsletterSubmit').disabled = true;
    }
});