class CustomBlock {
	constructor(insertAfterBlock, position, text) {
		this.insertAfterBlock = insertAfterBlock;
		this.position = +position - 1;
		this.text = text;
		this.createCustomBlock();
		this.setStyle();
	}

	createCustomBlock() {
		this.customDiv = document.createElement('li');
		this.customDiv.classList.add('custom-div');
		this.customDiv.id = 'js_widget593';
		this.customDiv.innerText = this.text;
	}

	setStyle() {
		const width = window.innerWidth;

		if (width < 768) {
			this.customDiv.style.width = '100%';
		} else if (width < 1200) {
			this.customDiv.style.width = '66.666%';
		} else {
			this.customDiv.style.gridColumn = 'span 2';
		}

		Object.assign(this.customDiv.style, {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '10px',
			boxShadow: '1px 1px 5px 5px #f1f1f1',
		});
	}

	insertBlock() {
		const products = document.querySelectorAll(this.insertAfterBlock);

		if (!products.length) {
			console.log(`Sorry, page don't have any ${this.insertAfterBlock}`);
			return;
		}

		if (products.length < this.position) {
			this.position = products.length - 1;
		}

		const insertAfterElement = products[this.position];
		const parentContainer = insertAfterElement.parentElement;

		parentContainer.insertBefore(
			this.customDiv,
			insertAfterElement.nextElementSibling
		);
	}
}

const customBlock1 = new CustomBlock('.product-item', 4, 'TEST TEXT 1');
customBlock1.insertBlock();
