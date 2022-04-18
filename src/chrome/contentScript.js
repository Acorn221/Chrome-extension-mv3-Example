/* global nsfwjs */
const buttonHTML = `<span class="main_separator__UnqDx"> / 
</span>
<button tabindex="0" id="nsfwScan">NSFW scan</button>`;

let nsfwJSmodel;

const addNSFWJSButtons = () => {
  if (!document.querySelector('#nsfwScan')) {
    const parent = document.querySelector('.main_search_prompt__rTdZv');
    if (!parent) return;
    const el = document.createElement('span');
    el.classList.add('main_nobr__t6v-a');
    el.innerHTML = buttonHTML;
    el.onclick = () => {
      nsfwJSmodel.classify(document.querySelector('.main_linklike__2o4F5').firstChild).then((predictions) => {
        // eslint-disable-next-line no-alert
        alert(`Predictions: ${JSON.stringify(predictions)}`);
      });
    };
    parent.appendChild(el);
  }
};

const createMutationObserver = () => {
  const observerOptions = {
    childList: true,
    attributes: false,
    subtree: true,
  };
  const observer = new MutationObserver(addNSFWJSButtons);
  observer.observe(document.querySelector('.main_looking_glass_container__2NtKu'), observerOptions);
};

const init = async () => {
  nsfwJSmodel = await nsfwjs.load();
  createMutationObserver();
};

init();
