<script
  type="text/javascript"
  src="https://app.termly.io/embed.min.js"
  data-auto-block="on"
  data-website-uuid="c028fb66-dc08-4d12-9e18-a9c8c9d2b7cd"
  ></script>
<link rel="stylesheet" href="https://sites.super.so/builder/themes/zap/zap.min.css">
<script async src="https://js.givebutter.com/elements/latest.js" ></script>
<script src="https://givebutter.com/js/widget.js"></script>

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

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-THD3T2JHW8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-THD3T2JHW8');
</script>