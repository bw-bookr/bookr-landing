class Footer {
	constructor(element){
		this.element = element;
		this.render();
	}

	render(){
		const footerNav = document.createElement('nav');
		
		const footerNavigation = new Navbar(footerNav, {'data-target': '#footer-nav', 'id': 'footer-nav'});

		this.element.appendChild(footerNav);


		const footerBody = document.createElement('div');
		footerBody.classList.add('container', 'footer-body');

		const row = document.createElement('div');
		row.classList.add('row');

		const copyright = document.createElement('p');
		copyright.innerHTML = `Copyright &copy; ${(new Date()).getFullYear()} Bookr.<br/>All rights reserved.`;
		
		row.appendChild(copyright);

		const social = document.createElement('div');
		social.classList.add('social');


		const facebookLink = document.createElement('a');
		facebookLink.setAttribute('target', '_blank');
		facebookLink.setAttribute('href', store.socialLinks.facebook);

		const facebookIcon = document.createElement('i');
		facebookIcon.classList.add('fa', 'fa-facebook');

		facebookLink.appendChild(facebookIcon);

		const facebookSpan = document.createElement('span');
		facebookSpan.classList.add('sr-only');
		facebookSpan.textContent = "Visit us at Facebook";

		facebookLink.appendChild(facebookSpan);

		social.appendChild(facebookLink);
		
		const twitterLink = document.createElement('a');
		twitterLink.setAttribute('target', '_blank');
		twitterLink.setAttribute('href', store.socialLinks.twitter);

		const twitterIcon = document.createElement('i');
		twitterIcon.classList.add('fa', 'fa-twitter');

		twitterLink.appendChild(twitterIcon);
		const twitterSpan = document.createElement('span');
		twitterSpan.classList.add('sr-only');
		twitterSpan.textContent = "Visit us at Twitter";

		twitterLink.appendChild(twitterSpan);

		social.appendChild(twitterLink);
		
		const githubLink = document.createElement('a');
		githubLink.setAttribute('target', '_blank');
		githubLink.setAttribute('href', store.socialLinks.github);

		const githubIcon = document.createElement('i');
		githubIcon.classList.add('fa', 'fa-github');

		githubLink.appendChild(githubIcon);
		const githubSpan = document.createElement('span');
		githubSpan.classList.add('sr-only');
		githubSpan.textContent = "View our Github repository";

		facebookLink.appendChild(githubSpan);

		social.appendChild(githubLink);

		row.appendChild(social);
		footerBody.appendChild(row);
		this.element.appendChild(footerBody);
	}
}

const footer = new Footer(document.querySelector('footer'));