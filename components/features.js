const featuresContent = [
    {
        icon: 'fa-globe',
        title: 'Available worldwide',
        description: 'We help people in over 110 countries (and counting!) discover new books. Stop by and check what we have to offer.'
    },
    {
        icon: 'fa-users',
        title: 'Peer reviewed books',
        description: 'Bored with going through the list of random books? We got you covered. Only the best, peer-reviewed books there.'
    },
    {
        icon: 'fa-credit-card',
        title: 'Your new book is only 5 clicks away',
        description: 'Buying your new books was never easier. It\'s only 5 clicks away of you!'
    },
    {
        icon: 'fa-forward',
        title: 'We do it FAST',
        description: 'No time to search for a new book? No worries. We will deliver you the best options in less than 10 seconds.'
    }
];

class Features {
    constructor(element, content){
        this.element = element;
        this.content = content;

        this.render();
    }

    render(){
        const container = document.createElement('div');
        container.classList.add('container');

        const row1 = document.createElement('div');
        row1.classList.add('row');

        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = 'Overview';

        row1.appendChild(title);
        container.appendChild(row1);

        const row2 = document.createElement('div');
        row2.classList.add('row', 'features-container');

        this.content.forEach(elem => this.renderFeature(elem, row2));

        container.appendChild(row2);
        this.element.appendChild(container);
    }

    renderFeature(data, selector){
        const feature = document.createElement('div');
        feature.classList.add('feature', 'col-sm-12', 'col-md-6');

        const icon = document.createElement('div');
        icon.classList.add('icon');

        const i_i = document.createElement('i');
        i_i.classList.add('fa', data.icon);
        
        icon.appendChild(i_i);
        feature.appendChild(icon);

        const feature_body = document.createElement('div');
        feature_body.classList.add('feature-body');

        const h5 = document.createElement('h5');
        h5.textContent = data.title;
        feature_body.appendChild(h5);

        const p = document.createElement('p');
        p.textContent = data.description;
        feature_body.appendChild(p);

        feature.appendChild(feature_body);
        selector.appendChild(feature);
    }
}

const features = new Features(document.querySelector('.features'), featuresContent);