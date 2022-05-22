
const arrowLeftIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
</svg>`;

const arrowRightIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
</svg>`;

const closeIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
</svg>`;



export function galleryZoom(parentClassName = 'agi-gallery', options = {}) {

  const galleries = [];
  const parentDivs = [...document.getElementsByClassName(parentClassName)];

  const zhtml = `
  <div id="agiZoomBg"></div>
  <div id="agiZoomFot"></div>
  <div id="agiZoomFot2"></div>
  <div id="agiZoomTitle"></div>
  <div id="agiZoomArrows">
    <div id="agizoom-left">&nbsp;${arrowLeftIcon}</div>
    <div id="agizoom-right">${arrowRightIcon}&nbsp;</div>
  </div>
  <div id="agizoom-close">${closeIcon}&nbsp;</div>
  `;

  const agiZoom = document.createElement('div');
  agiZoom.setAttribute('id', 'agiZoom');
  agiZoom.style.display = 'none';
  agiZoom.style.position = 'fixed';
  agiZoom.style.top = 0;
  agiZoom.style.left = 0;
  agiZoom.style.width = '100vw';
  agiZoom.style.height = '100vh';
  agiZoom.style.zIndex = '999';
  document.body.appendChild(agiZoom);
  agiZoom.innerHTML = zhtml;
  const bg = document.getElementById('agiZoomBg');
  bg.style.display = 'block';
  bg.style.position = 'fixed';
  bg.style.width = '100%';
  bg.style.height = '100vh';
  bg.style.backgroundColor = '#000000';
  bg.style.opacity = 0.8;
  const fot1 = document.getElementById('agiZoomFot');
  const fot2 = document.getElementById('agiZoomFot2');
  fot1.style.display = 'flex';
  fot1.style.top = 0;
  fot1.style.left = 0;
  fot1.style.width = '100%';
  fot1.style.height = '100vh';
  fot1.style.position = 'fixed';
  fot1.style.alignContent = 'center';
  fot1.style.alignItems = 'center';
  fot1.style.justifyContent = 'center';
  fot2.style.cssText = fot1.style.cssText;
  const agizoomArrows = document.getElementById('agiZoomArrows');
  agizoomArrows.style.display = 'flex';
  agizoomArrows.style.justifyContent = 'space-between';
  agizoomArrows.style.alignItems = 'center';
  agizoomArrows.style.position = 'fixed';
  agizoomArrows.style.top = 0;
  agizoomArrows.style.left = 0;
  agizoomArrows.style.width = '100%';
  agizoomArrows.style.height = '100vh';
  agizoomArrows.style.color = 'white';
  agizoomArrows.style.fontSize = '4rem';
  const azl = document.getElementById('agizoom-left');
  const azr = document.getElementById('agizoom-right');
  azr.style.opacity = '0.3';
  azr.style.cursor = 'pointer';
  azr.style.width = '20vw';
  azr.style.height = '100vh';
  azr.style.alignItems = 'center';
  azr.style.display = 'flex';
  azl.style.cssText = azr.style.cssText;
  azr.style.justifyContent = 'flex-end';
  azl.style.justifyContent = 'flex-start';
  azr.style.textAlign = 'right';
  azl.style.textAlign = 'left';
  const agzc = document.getElementById('agizoom-close');
  agzc.style.display = 'block';
  agzc.style.position = 'absolute';
  agzc.style.right = '0';
  agzc.style.top = '25px';
  agzc.style.color = 'white';
  agzc.style.fontSize = '4rem';
  agzc.style.cursor = 'pointer';
  agzc.style.opacity = 0.4;
  const agt = document.getElementById('agiZoomTitle');
  agt.style.display = 'none';
  agt.style.position = 'absolute';
  agt.style.boxSizing = 'border-box';
  agt.style.bottom = '0px';
  agt.style.left = '15%';
  agt.style.width = '70%';
  agt.style.backgroundColor = '#000000';
  agt.style.padding = '20px';
  agt.style.color = '#ffffff';
  agt.style.textAlign = 'center';
  agt.style.fontSize = '0.9em';
  agt.style.borderTopLeftRadius = '20px';
  agt.style.borderTopRightRadius = '20px';


  parentDivs.forEach( (el)=> {
    const photos = [ ...el.children ];
    const dg =  el.dataset.gallery;
    if (typeof galleries[dg] === "undefined") {
      galleries[dg] = [];
    }
    galleries[dg] = galleries[dg].concat(photos);
  });

  console.info('g', galleries);

  for (const g in galleries) {
    console.info('gg', g);
    let i = 0;
    galleries[g].forEach( (photo) => {
      photo.style.cursor = 'pointer';
      photo.dataset.number = i;
      photo.addEventListener('click', (event)=> {
        const p = event.currentTarget;
        const img = p.dataset.image;
        agiZoom.dataset.currentPhoto = p.dataset.number;
        agt.innerText = p.dataset.title;
        if (agt.innerText === 'undefined') {
          agt.style.display = 'none';
        } else {
          agt.style.display = 'block';
        }
        agiZoom.dataset.currentGallery = g;
        agiZoom.dataset.photoCount = galleries[g].length;
        fot1.innerHTML = '';
        fot2.innerHTML = `<img id="agiZoom-img2" 
            style="max-width: 90%; max-height: 90%; display: block;border: 5px solid black" 
            src="${img}">`;
        azl.style.opacity = 1;
        azr.style.opacity = 1;
        agiZoom.style.display = 'block';
        const arrowsInt = setInterval( ()=>{
          if (Number(azl.style.opacity) < 0) {
            clearInterval(arrowsInt);
          } else {
            azl.style.opacity -= 0.02;
            azr.style.opacity -= 0.02;
          }
        },10);


      });
      i++;
    });
  }

  function nextPhoto() {
    let cf = Number(agiZoom.dataset.currentPhoto) + 1;
    if ( cf > agiZoom.dataset.photoCount - 1 ) { cf = 0; }
    const img = galleries[ agiZoom.dataset.currentGallery ][ cf ].dataset.image;
    fot2.innerHTML = `<img id="agiZoom-img2" 
            style="max-width: 90%; max-height: 90%; display: block;border: 5px solid black" 
            src="${img}">`;
    agiZoom.dataset.currentPhoto = cf;
    agt.innerText = galleries[ agiZoom.dataset.currentGallery ][ cf ].dataset.title;
    if (agt.innerText === 'undefined') {
      agt.style.display = 'none';
    } else {
      agt.style.display = 'block';
    }
  }

  function prevFoto() {
    let cf = agiZoom.dataset.currentPhoto - 1;
    if ( cf < 0 ) { cf = Number(agiZoom.dataset.photoCount) - 1; }
    const img = galleries[ agiZoom.dataset.currentGallery ][ cf ].dataset.image;
    fot2.innerHTML = `<img id="agiZoom-img2" 
            style="max-width: 90%; max-height: 90%; display: block;border: 5px solid black" 
            src="${img}">`;
    agiZoom.dataset.currentPhoto = cf;
    agt.innerText = galleries[ agiZoom.dataset.currentGallery ][ cf ].dataset.title;
    if (agt.innerText === 'undefined') {
      agt.style.display = 'none';
    } else {
      agt.style.display = 'block';
    }
  }

  function zClose() {
    agiZoom.style.display = 'none';
  }

  azl.addEventListener('click', (event) => {
    prevFoto();
  });

  azr.addEventListener('click', (event) => {
    nextPhoto();
  });

  azl.addEventListener('mouseover', ()=> {
    azl.style.opacity = 0.6;
  });

  azr.addEventListener('mouseover', ()=> {
    azr.style.opacity = 0.6;
  });

  azl.addEventListener('mouseout', ()=> {
    azl.style.opacity = 0;
  });

  azr.addEventListener('mouseout', ()=> {
    azr.style.opacity = 0;
  });

  agzc.addEventListener('click', (event) => {
    zClose();
  });

  agzc.addEventListener('mouseout', ()=> {
    agzc.style.opacity = 0.1;
  });

  agzc.addEventListener('mouseover', ()=> {
    agzc.style.opacity = 1;
  });


  document.body.addEventListener('keydown', (e) => {
    if (agiZoom.style.display === 'block') {
      console.info('k', e.code);
      if (e.code === 'ArrowRight') {
        nextPhoto();
      }
      else if (e.code === 'ArrowLeft') {
        prevFoto();
      }
      else if (e.code === 'Space') {
        nextPhoto();
      }
      else if (e.code === 'Escape') {
        zClose();
      }
    }
  });



};

