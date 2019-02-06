class Navbar {
    constructor(element, data){
        this.element = element;
        this.data = data;
        this.toggled = false;
        this.open = false;

        this.render();
    }

    render(){
        this.element.classList.add('navbar', 'navbar-expand-lg', 'navbar-primary');

        const navbarBrand = document.createElement('a');
        navbarBrand.classList.add('navbar-brand');
        navbarBrand.textContent = "Bookr";
        navbarBrand.setAttribute('href', store.links.homepage);

        this.element.appendChild(navbarBrand);
        
        const navbarToggler = document.createElement('button');
        navbarToggler.classList.add('navbar-toggler');
        navbarToggler.setAttribute('type', 'button');
        navbarToggler.setAttribute('data-toggle', 'collapse');
        navbarToggler.setAttribute('data-target', this.data['data-target']);
        navbarToggler.setAttribute('aria-controls', 'navbar');
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarToggler.setAttribute('aria-label', 'Toggle navigation');

        const navbarTogglerIcon = document.createElement('span');
        navbarTogglerIcon.classList.add('navbar-toggler-icon');

        navbarToggler.appendChild(navbarTogglerIcon);
        this.element.appendChild(navbarToggler);

        const nbCollapse = document.createElement('div');
        nbCollapse.setAttribute('id', this.data['id']);
        nbCollapse.classList.add('collapse', 'navbar-collapse');

        const navbarNav = document.createElement('ul');
        navbarNav.classList.add('navbar-nav');

        store.navbarItems.forEach(elem => this.renderNavbarItem(elem, navbarNav));

        nbCollapse.append(navbarNav);
        this.element.appendChild(nbCollapse);
    }

    renderNavbarItem(data, selector){
        const navbarItem = document.createElement('li');
        navbarItem.classList.add('nav-item');

        const link = document.createElement('a');
        link.classList.add('nav-link');
        link.setAttribute('href', data.link);
        link.setAttribute('href', data.link);
        link.textContent = data.name;

        navbarItem.appendChild(link);
        selector.appendChild(navbarItem);
    }
}

const navbar = new Navbar(document.querySelector('nav'), {'data-target': '#navbar', 'id': 'navbar'});
navbar.element.classList.add('fixed-top', 'top');

// navbar background toggle
document.addEventListener('scroll', () => {
    if(window.scrollY >= 100 && !navbar.toggled){
        navbar.element.classList.remove('top');
        navbar.toggled = !navbar.toggled;
    }

    if(window.scrollY < 50 && navbar.toggled && !navbar.open){
        navbar.element.classList.add('top');
        navbar.toggled = !navbar.toggled;
    }
});

// background on top when menu open
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    if((window.scrollY < 100)) {
        navbar.element.classList.toggle('top');
        navbar.open = !navbar.open;
    }
});