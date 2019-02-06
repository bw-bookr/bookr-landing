class RegistrationPanel {
    constructor(element){
        this.element = element;

        this.render();
    }

    render(){
        const container = document.createElement('div');
        container.classList.add('container');

        const row1 = document.createElement('div');
        row1.classList.add('row', 'heading');

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = 'What are you waiting for?';

        const description = document.createElement('div');
        description.classList.add('col-sm-12', 'offset-md-1', 'col-md-10', 'offset-lg-2', 'col-lg-8');

        const description_p = document.createElement('p');
        description_p.textContent = 'Go ahead and read something!';

        description.appendChild(description_p);

        row1.appendChild(title);
        row1.appendChild(description);
        container.appendChild(row1);

        const row2 = document.createElement('div');
        row2.classList.add('row');

        const registerBox = document.createElement('div');
        registerBox.classList.add('register', 'col-sm-12', 'offset-md-4', 'col-md-4', 'offset-lg-4', 'col-lg-4');

        const registerBoxBtn = document.createElement('a');
        registerBoxBtn.classList.add('btn', 'btn-lg', 'btn-primary');
        registerBoxBtn.setAttribute('href', store.frontendLink);
        registerBoxBtn.textContent = 'Register';
        
        registerBox.appendChild(registerBoxBtn);
        row2.appendChild(registerBox);
        container.appendChild(row2);


        const row3 = document.createElement('div');
        row3.classList.add('row');

        const reg_description = document.createElement('p');
        reg_description.textContent = 'Can\'t wait to see what you pick up to read! If you like Bookr, make sure you share it with your friends too!';

        const shareBox = document.createElement('div');
        shareBox.classList.add('share', 'col-sm-12', 'offset-md-1', 'col-md-10', 'offset-lg-2', 'col-lg-8');

        const facebookLink = document.createElement('a');
        facebookLink.classList.add('btn', 'btn-primary');
        facebookLink.setAttribute('href', store.socialLinks.facebook);

        const facebookIcon = document.createElement('i');
        facebookIcon.classList.add('fa', 'fa-facebook');

        facebookLink.appendChild(facebookIcon);
        facebookLink.append(" Share on Facebook");

        shareBox.appendChild(facebookLink);
        
        const twitterLink = document.createElement('a');
        twitterLink.classList.add('btn', 'btn-primary');
        twitterLink.setAttribute('href', store.socialLinks.twitter);

        const twitterIcon = document.createElement('i');
        twitterIcon.classList.add('fa', 'fa-twitter');

        twitterLink.appendChild(twitterIcon);
        twitterLink.append(" Share on Twitter");

        shareBox.appendChild(twitterLink);
        
        const linkedinLink = document.createElement('a');
        linkedinLink.classList.add('btn', 'btn-primary');
        linkedinLink.setAttribute('href', store.socialLinks.linkedin);

        const linkedinIcon = document.createElement('i');
        linkedinIcon.classList.add('fa', 'fa-linkedin');

        linkedinLink.appendChild(linkedinIcon);
        linkedinLink.append(" Share on LinkedIn");

        shareBox.appendChild(linkedinLink);

        row3.appendChild(reg_description);
        row3.appendChild(shareBox);
        container.appendChild(row3);
        this.element.appendChild(container);
    }
}

const registration = new RegistrationPanel(document.querySelector('.registration'));