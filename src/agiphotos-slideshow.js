let slideshows = {};

/**
 *
 * @param parentDivID { string }
 * @param options { timeWait, timeFade }
 */

export function slideshowStart( parentDivID = 'slideshow', options = {} ) {
  const d = document.getElementById(parentDivID);
  if (d) {
    const els = d.children;
    if (els.length < 2) {
      return;
    }
    let tmWait = Number(options['timeWait']);
    if (!tmWait) { tmWait = 3000; }

    let tmFade = Number(options['timeFade']);
    if (!tmFade) { tmFade = 20; }

    const waitForLoadImg = setInterval( ()=>{
      const h = window.getComputedStyle(els[0]).height;
      if (h && h !== '0px') {
        const d = document.getElementById(parentDivID);
        d.style.height = h;
        clearInterval(waitForLoadImg);
      }
    }, 10);


    for (const el of els) {
      el.style.opacity = window.getComputedStyle(el).opacity;
    }

    let start;
    function slideshow(timestamp) {
      if (start === undefined) {
        start = timestamp;
      }
      const elapsed = timestamp - start;
      if (elapsed > tmWait) {
        start = timestamp;
        const el = d.lastElementChild;
        let opacity = 1;
        let animstart;
        //console.info('anim started', elapsed);
        function anim(timestamp2) {
          if (animstart === undefined) {
            animstart = timestamp2;
          }
          const elapsed2 = timestamp2 - animstart;
          if (elapsed2 > tmFade) {
            //console.info('e2', elapsed2);
            if (!d.lastElementChild) {
              console.info('error: no last child element');
              return;
            } else {
              if (d.lastElementChild.style.opacity - 0.02 < 0) {
                const node = d.lastElementChild;
                const clone = node.cloneNode(true);
                d.insertBefore(clone, d.firstElementChild);
                d.removeChild(d.lastElementChild);
                d.firstElementChild.style.opacity = 1;
              } else {
                d.lastElementChild.style.opacity = d.lastElementChild.style.opacity - 0.02;
                window.requestAnimationFrame(anim)
              }
            }
          } else {
            window.requestAnimationFrame(anim)
          }
        }
        window.requestAnimationFrame(anim);
      }
      window.requestAnimationFrame(slideshow);
    }
    window.requestAnimationFrame(slideshow);
  }
}

