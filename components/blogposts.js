class BlogPost {
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
		title.textContent = 'Blog posts';

		row1.appendChild(title);
		container.appendChild(row1);

		const row2 = document.createElement('div');
		row2.classList.add('row', 'blog-wrapper');

		store.blogposts.forEach((elem, i) => this.renderBlogPost(elem, row2, i>1, i>2));

		container.appendChild(row2);
		this.element.appendChild(container);
	}

	renderBlogPost(data, selector, smHidden, lgHidden){
		const postWrapper = document.createElement('div');
		postWrapper.classList.add('col-sm-12', 'col-md-6', 'col-lg-4');
		if(smHidden) postWrapper.classList.add('sm-hidden');
		if(lgHidden) postWrapper.classList.add('lg-hidden');

		const blogPost = document.createElement('div');
		blogPost.classList.add('blog-post');

		const blogImg = document.createElement('img');
		blogImg.setAttribute('src', data.img);
		blogImg.setAttribute('alt', data.title);
		blogImg.classList.add('post-img-top');
		
		blogPost.appendChild(blogImg);

		const postBody = document.createElement('div');
		postBody.classList.add('post-body');

		const h4 = document.createElement('h4');
		h4.textContent = data.title;
		postBody.appendChild(h4);

		const btn = document.createElement('a');
		btn.classList.add('btn', 'btn-primary');
		btn.setAttribute('href', '#');
		btn.textContent = "Read more";
		postBody.appendChild(btn);

		blogPost.appendChild(postBody);
		postWrapper.appendChild(blogPost);
		selector.appendChild(postWrapper);
	}
}

const blogpost = new BlogPost(document.querySelector('.blog'));