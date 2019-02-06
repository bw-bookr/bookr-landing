class Team {
	constructor(element){
		this.element = element;
		this.render();
	}

	render(){
		const container = document.createElement('div');
		container.classList.add('container');
		animate(container, 'fade-in');

		const row1 = document.createElement('div');
		row1.classList.add('row');

		const title = document.createElement('h2');
		title.classList.add('title');
		title.textContent = 'Our Team';

		row1.appendChild(title);
		container.appendChild(row1);

		const row2 = document.createElement('div');
		row2.classList.add('row', 'people');

		store.team.forEach(elem => this.renderPerson(elem, row2));

		container.appendChild(row2);
		this.element.appendChild(container);
	}

	renderPerson(data, selector){
		const person = document.createElement('a');
		person.classList.add('team-member', 'col-sm-12', 'col-md-3');
		animate(person, 'fade-up');
		person.setAttribute('href', data.github);
		person.setAttribute('target', '_blank');

		const avatar = document.createElement('div');
		avatar.classList.add('avatar');

		const avatarImg = document.createElement('img');
		avatarImg.setAttribute('src', data.avatar);
		avatarImg.setAttribute('alt', data.name);
		
		avatar.appendChild(avatarImg);
		person.appendChild(avatar);

		const h5 = document.createElement('h5');
		h5.textContent = data.name;
		person.appendChild(h5);

		const span = document.createElement('span');
		span.textContent = data.position;
		person.appendChild(span);

		selector.appendChild(person);
	}
}

const team = new Team(document.querySelector('.team'));