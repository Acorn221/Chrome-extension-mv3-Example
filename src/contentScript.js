const buttonHTML = `<span class="main_separator__UnqDx"> / 
</span>
<button tabindex="0" id="nsfwScan">NSFW scan</button>`;

const addNSFWJSButtons = () => {
	if (!document.querySelector('#nsfwScan')) {
		const parent = document.querySelector(".main_search_prompt__rTdZv");
		if (!parent) return;
		const el = document.createElement('span');
		el.classList.add("main_nobr__t6v-a");
		el.innerHTML = buttonHTML;
		el.onclick = () => {
			alert("hi");
		}
		parent.appendChild(el);
	}
};

const createMutationObserver = () => {
	const observerOptions = {
		childList: true,
		attributes: false,
		subtree: true
	}
	const observer = new MutationObserver(addNSFWJSButtons);
	observer.observe(document.querySelector('.main_looking_glass_container__2NtKu'), observerOptions);
};

createMutationObserver();