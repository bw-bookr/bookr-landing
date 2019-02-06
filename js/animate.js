function animate(selector, type){
	selector.setAttribute('data-aos', type);
	selector.setAttribute('data-aos-duration', '2000');
	selector.setAttribute('data-aos-delay', `${Math.floor(Math.random()*20)*50}`);
}