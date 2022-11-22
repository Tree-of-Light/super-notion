<link rel="stylesheet" href="https://sites.super.so/builder/themes/zap/zap.min.css">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MNPNWQM');</script>
<!-- End Google Tag Manager -->


<!-- custom embed via code block -->
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