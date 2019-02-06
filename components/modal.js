class Modal {
	constructor(element, data){
		this.element = element;
		this.data = data;
		this.render();
	}

	render(){
		this.element.classList.add('fade');
		this.element.setAttribute('id', `blogpost-${this.data.id}`);
		this.element.setAttribute('tabindex', '-1');
		this.element.setAttribute('role', 'dialog');
		this.element.setAttribute('aria-labelledby', `blogpost-modal-${this.data.id}`);
		this.element.setAttribute('aria-hidden', 'true');

		const modalDialog = document.createElement('div');
		modalDialog.classList.add('modal-dialog');
		modalDialog.setAttribute('role', 'document');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const modalHeader = document.createElement('div');
		modalHeader.classList.add('modal-header');

		const modalTitle = document.createElement('h5');
		modalTitle.classList.add('modal-title');
		modalTitle.setAttribute('id', `blogpost-modal-${this.data.id}`);
		modalTitle.textContent = this.data.title;


		const closeBtn = document.createElement('button');
		closeBtn.classList.add('close');
		closeBtn.setAttribute('type', 'button');
		closeBtn.setAttribute('data-dismiss', 'modal');
		closeBtn.setAttribute('aria-label', 'close');

		const closeIcon = document.createElement('span');
		closeIcon.setAttribute('aria-hidden', 'true');
		closeIcon.innerHTML = '&times;';
		
		closeBtn.appendChild(closeIcon);
		modalHeader.appendChild(modalTitle);
		modalHeader.appendChild(closeBtn);


		modalContent.appendChild(modalHeader);

		const modalBody = document.createElement('div');
		modalBody.classList.add('modal-body');

		// modalBody.textContent = "blogpost content here";

		const modalBodyImg = document.createElement('img');
		modalBodyImg.setAttribute('src', this.data.img);
		modalBodyImg.style.width = '100%';
		modalBodyImg.style.height = 'auto';

		modalContent.appendChild(modalBodyImg);

		modalContent.appendChild(modalBody);

		const modalFooter = document.createElement('div');
		modalFooter.classList.add('modal-footer');

		const modalFooterBtn = document.createElement('button');
		modalFooterBtn.classList.add('btn', 'btn-primary');
		modalFooterBtn.setAttribute('type', 'button');
		modalFooterBtn.setAttribute('data-dismiss', 'modal');
		modalFooterBtn.textContent = 'Close';

		modalFooter.appendChild(modalFooterBtn);

		modalContent.append(modalFooter);

		modalDialog.appendChild(modalContent);
		this.element.appendChild(modalDialog);
	}

}