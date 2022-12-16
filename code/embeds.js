// these are spread across specific page code

// /donate
<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>

// /indigicore/volunteer
<script src="https://pointapp.org/embed/assets/js/iframe-scripts.js" data-frame-id="374"></script>

// /indigicore/fund
<script src="https://donorbox.org/widget.js" paypalExpress="false"></script>


// og
<script>

function clearBlock(el) {
        const node = el.parentElement.parentElement;
        node.innerHTML = '';
        return node;
    }

const SELECTOR = 'code:not([super-embed-seen])';
function setupEmbeds() {

    document.querySelectorAll(SELECTOR).forEach((node) => {
    node.setAttribute('super-embed-seen', 1);
    if (node.innerText.startsWith('super-embed:')) {
        const code = node.innerText.replace('super-embed:', '');
            const parentNode = clearBlock(node);
            parentNode.innerHTML = code;
            parentNode.querySelectorAll('script').forEach((script) => {
                if (!script.src && script.innerText) {
                    eval(script.innerText);
                } else {
                    const scr = document.createElement('script');
                    scr.src = script.src;
                    document.body.appendChild(scr);
                }
            })
        }
    })
}

setupEmbeds();

var observer = new MutationObserver(function(mutations) {
   if (document.querySelector(SELECTOR)) {
      setupEmbeds();
    }
});
observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});

</script>
