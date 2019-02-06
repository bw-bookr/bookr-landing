class ContactForm {
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
        title.textContent = 'Contact us';

        row1.appendChild(title);
        container.appendChild(row1);

        const row2 = document.createElement('div');
        row2.classList.add('row', 'people');

        this.renderContactForm(row2);

        container.appendChild(row2);
        this.element.appendChild(container);
    }

    renderContactForm(selector){
        const contactForm = document.createElement('div');
        contactForm.classList.add('contact-form', 'col-sm-12', 'col-md-10', 'col-lg-7');

        const form = document.createElement('form');
        form.setAttribute('action', '#');

        const row1 = document.createElement('div');
        row1.classList.add('row');

        const rowContainer1 = document.createElement('div');
        rowContainer1.classList.add('col-sm-12', 'col-md-6');
        
        const formGroupLeft = document.createElement('div');
        formGroupLeft.classList.add('form-group');

        const leftLabel = document.createElement('label');
        leftLabel.textContent = "Full Name";
        leftLabel.setAttribute('for', 'contactFormFullName');

        formGroupLeft.appendChild(leftLabel);

        const leftInput = document.createElement('input');
        leftInput.classList.add('form-control');
        leftInput.setAttribute('type', 'text');
        leftInput.setAttribute('id', 'contactFormFullName');
        leftInput.setAttribute('placeholder', 'Enter your full name');

        formGroupLeft.appendChild(leftInput);

        rowContainer1.appendChild(formGroupLeft);
        row1.appendChild(rowContainer1);

        const rowContainer2 = document.createElement('div');
        rowContainer2.classList.add('col-sm-12', 'col-md-6');
        
        const formGroupRight = document.createElement('div');
        formGroupRight.classList.add('form-group');

        const rightLabel = document.createElement('label');
        rightLabel.textContent = "Full Name";
        rightLabel.setAttribute('for', 'contactFormFullName');

        formGroupRight.appendChild(rightLabel);

        const rightInput = document.createElement('input');
        rightInput.classList.add('form-control');
        rightInput.setAttribute('type', 'email');
        rightInput.setAttribute('id', 'contactFormEmail');
        rightInput.setAttribute('placeholder', 'Enter your email address');

        formGroupRight.appendChild(rightInput);

        rowContainer2.appendChild(formGroupRight);
        row1.appendChild(rowContainer2);

        form.appendChild(row1);

        const row2 = document.createElement('div');
        row2.classList.add('row');
        
        const col = document.createElement('div');
        col.classList.add('col');

        const formGroupBottom = document.createElement('div');
        formGroupBottom.classList.add('form-group');

        const bottomLabel = document.createElement('label');
        bottomLabel.setAttribute('for', 'contactFormInput');
        bottomLabel.textContent = 'Message';

        const bottomTextArea = document.createElement('textarea');
        bottomTextArea.classList.add('form-control');
        bottomTextArea.setAttribute('name', 'message');
        bottomTextArea.setAttribute('id', 'contactFormInput');
        bottomTextArea.setAttribute('rows', '10');
        bottomTextArea.setAttribute('placeholder', 'Enter your message...');

        formGroupBottom.appendChild(bottomLabel);
        formGroupBottom.appendChild(bottomTextArea);

        col.appendChild(formGroupBottom);
        row2.appendChild(col);
        form.appendChild(row2);

        const submit = document.createElement('input');
        submit.classList.add('btn', 'btn-primary');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Send your message');
        
        form.appendChild(submit);

        contactForm.appendChild(form);
        selector.appendChild(contactForm);
    }
}

const contactform = new ContactForm(document.querySelector('.contact'));