import * as dom from '../components/dom';
import * as stylesheet from '../styles/stylesheet';

class Hello {
	wrapper = document.querySelector('[data-hello]');
	domLettersWidths = [];
	wordWidth;
	keyframeWidths = [];
	keyframePercentages = ['0%'];
	updateTimeout;

	constructor(text, language) {
		this.text = text;
		this.language = language;

		this.letterArray = [...this.text];
		this.wordLength = this.letterArray.length;
		this.split = 100 / (this.wordLength + 1);

		this.update = this.update.bind(this);
		this.debounceUpdate = this.debounceUpdate.bind(this);
	}

	createWord() {
		this.letterArray.forEach(letter => {
			const letterElement = document.createElement('span');
			letterElement.innerText = letter;
			this.wrapper.appendChild(letterElement);
		});
	}
	getLetterDimensions() {
		this.domLettersWidths = [...this.wrapper.childNodes].map(
			letter => letter.getBoundingClientRect().width
		);

		this.wordWidth = this.domLettersWidths.reduce(
			(previous, current) => previous + current,
			0
		);

		stylesheet.stylesheet[stylesheet.helloTextWrapperIndex].style.setProperty(
			'--hello_word-length',
			`${this.wordLength}`
		);

		this.keyframeWidths = [this.wordWidth, this.wordWidth];
	}
	createKeyframes() {
		let keyframePercentage = 0;
		let keyframeWidth = this.wordWidth;

		for (
			let letterPosition = 0;
			letterPosition < this.wordLength;
			letterPosition++
		) {
			keyframePercentage += this.split;
			this.keyframePercentages.push(`${keyframePercentage}%`);
		}

		const checkFor100 = this.keyframePercentages.includes(
			percentage => percentage === '100%'
		);

		if (!checkFor100) {
			this.keyframePercentages.push('100%');
		}

		for (
			let letterPosition = this.wordLength;
			letterPosition > 0;
			letterPosition--
		) {
			keyframeWidth -= this.domLettersWidths[letterPosition - 1];
			this.keyframeWidths.push(`${keyframeWidth}`);
		}

		this.setKeyframes();
	}
	setKeyframes() {
		this.keyframeWidths.forEach((width, index) => {
			const percentage = this.keyframePercentages[index];

			stylesheet.stylesheet[stylesheet.typingHelloKeyframeIndex].appendRule(
				`${percentage} {width: ${width}px}`
			);
		});
	}

	animate() {
		this.createWord();
		this.getLetterDimensions();
		this.createKeyframes();
		this.resize();
		this.wrapper.dataset.state = dom.state.active;
	}

	removeWord() {
		[...this.wrapper.children].forEach(node => {
			node.remove();
		});
	}
	removeKeyframes() {
		this.keyframePercentages.forEach(percentage => {
			stylesheet.stylesheet[stylesheet.typingHelloKeyframeIndex].deleteRule(
				`${percentage}`
			);
		});
	}
	clean() {
		window.removeEventListener('resize', this.debounceUpdate);

		if (this.wrapper.children) {
			this.removeWord();
		}
		if (
			stylesheet.stylesheet[stylesheet.typingHelloKeyframeIndex].cssRules
				.length > 0
		) {
			this.removeKeyframes();
		}
	}

	updateKeyframes() {
		this.getLetterDimensions();
		let keyframeWidth = this.wordWidth;

		for (
			let letterPosition = this.wordLength;
			letterPosition > 0;
			letterPosition--
		) {
			keyframeWidth -= this.domLettersWidths[letterPosition - 1];
			this.keyframeWidths.push(`${keyframeWidth}`);
		}
	}
	update() {
		this.wrapper.dataset.state = dom.state.inactive;
		this.updateKeyframes();
		this.removeKeyframes();
		this.setKeyframes();

		this.updateTimeout = setTimeout(() => {
			this.wrapper.dataset.state = dom.state.active;
		}, 1000);
	}
	debounceUpdate() {
		clearTimeout(this.updateTimeout);
		this.update();
	}

	resize() {
		window.addEventListener('resize', this.debounceUpdate);
	}
}

export { Hello };
