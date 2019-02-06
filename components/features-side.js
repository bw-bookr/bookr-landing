class FeaturesSide {
	constructor(element){
		this.element = element;
		this.render();
	}

	render(){
		const container = document.createElement('div');
		container.classList.add('container-fluid');

		const row = document.createElement('div');
		row.classList.add('row');

		const appScreenshotWrapper = document.createElement('div');
		appScreenshotWrapper.classList.add('app-screenshot-wrapper', 'col-sm-12', 'col-md-12', 'col-lg-4');
		
		const appImg = document.createElement('img');
		appImg.setAttribute('src', './img/app-screenshot.jpg');
		appImg.setAttribute('alt', 'App screenshot');

		appScreenshotWrapper.appendChild(appImg);

		row.appendChild(appScreenshotWrapper);

		const featuresWrapper = document.createElement('div');
		featuresWrapper.classList.add('features-side-wrapper', 'col-sm-12', 'col-md-6', 'col-lg-4');

		const featuresWrapperContainer = document.createElement('div');

		const h3 = document.createElement('h3');
		h3.textContent = "Why Bookr";
		featuresWrapperContainer.appendChild(h3);
		
		store.featuresSide.forEach(elem => this.renderFeature(elem, featuresWrapperContainer));
		
		featuresWrapper.appendChild(featuresWrapperContainer);
		row.appendChild(featuresWrapper);
		container.appendChild(row);
		this.element.appendChild(container);
	}

	renderFeature(data, selector){
		const feature = document.createElement('div');
		feature.classList.add('feature');

		animate(feature, 'fade-up');

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
		p.innerHTML = data.description;
		feature_body.appendChild(p);

		feature.appendChild(feature_body);
		selector.appendChild(feature);
	}
}

const featuresSide = new FeaturesSide(document.querySelector('.features-side'));