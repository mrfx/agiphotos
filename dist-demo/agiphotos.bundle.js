(()=>{"use strict";!function(e="slideshow",t={}){const i=document.getElementById(e);if(i){const l=i.children;if(l.length<2)return;let o=Number(t.timeWait);o||(o=3e3);let s=Number(t.timeFade);s||(s=20);const n=setInterval((()=>{const t=window.getComputedStyle(l[0]).height;t&&"0px"!==t&&(document.getElementById(e).style.height=t,clearInterval(n))}),10);for(const r of l)r.style.opacity=window.getComputedStyle(r).opacity;let a;function d(e){if(void 0===a&&(a=e),e-a>o){let t;function l(e){if(void 0===t&&(t=e),e-t>s){if(!i.lastElementChild)return void console.info("error: no last child element");if(i.lastElementChild.style.opacity-.02<0){const e=i.lastElementChild.cloneNode(!0);i.insertBefore(e,i.firstElementChild),i.removeChild(i.lastElementChild),i.firstElementChild.style.opacity=1}else i.lastElementChild.style.opacity=i.lastElementChild.style.opacity-.02,window.requestAnimationFrame(l)}else window.requestAnimationFrame(l)}a=e,i.lastElementChild,window.requestAnimationFrame(l)}window.requestAnimationFrame(d)}window.requestAnimationFrame(d)}}("slideshow",{timeWait:5e3,timeFade:1}),function(e="agi-gallery",t={}){const i=[],l=[...document.getElementsByClassName(e)],o=document.createElement("div");o.setAttribute("id","agiZoom"),o.style.display="none",o.style.position="fixed",o.style.top=0,o.style.left=0,o.style.width="100vw",o.style.height="100vh",o.style.zIndex="999",document.body.appendChild(o),o.innerHTML='\n  <div id="agiZoomBg"></div>\n  <div id="agiZoomFot"></div>\n  <div id="agiZoomFot2"></div>\n  <div id="agiZoomTitle"></div>\n  <div id="agiZoomArrows">\n    <div id="agizoom-left">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">\n  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>\n</svg></div>\n    <div id="agizoom-right"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">\n  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>\n</svg>&nbsp;</div>\n  </div>\n  <div id="agizoom-close"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>\n</svg>&nbsp;</div>\n  ';const s=document.getElementById("agiZoomBg");s.style.display="block",s.style.position="fixed",s.style.width="100%",s.style.height="100vh",s.style.backgroundColor="#000000",s.style.opacity=.8;const n=document.getElementById("agiZoomFot"),a=document.getElementById("agiZoomFot2");n.style.display="flex",n.style.top=0,n.style.left=0,n.style.width="100%",n.style.height="100vh",n.style.position="fixed",n.style.alignContent="center",n.style.alignItems="center",n.style.justifyContent="center",a.style.cssText=n.style.cssText;const d=document.getElementById("agiZoomArrows");d.style.display="flex",d.style.justifyContent="space-between",d.style.alignItems="center",d.style.position="fixed",d.style.top=0,d.style.left=0,d.style.width="100%",d.style.height="100vh",d.style.color="white",d.style.fontSize="4rem";const r=document.getElementById("agizoom-left"),y=document.getElementById("agizoom-right");y.style.opacity="0.3",y.style.cursor="pointer",y.style.width="20vw",y.style.height="100vh",y.style.alignItems="center",y.style.display="flex",r.style.cssText=y.style.cssText,y.style.justifyContent="flex-end",r.style.justifyContent="flex-start",y.style.textAlign="right",r.style.textAlign="left";const c=document.getElementById("agizoom-close");c.style.display="block",c.style.position="absolute",c.style.right="0",c.style.top="25px",c.style.color="white",c.style.fontSize="4rem",c.style.cursor="pointer",c.style.opacity=.4;const m=document.getElementById("agiZoomTitle");m.style.display="none",m.style.position="absolute",m.style.boxSizing="border-box",m.style.bottom="0px",m.style.left="15%",m.style.width="70%",m.style.backgroundColor="#000000",m.style.padding="20px",m.style.color="#ffffff",m.style.textAlign="center",m.style.fontSize="0.9em",m.style.borderTopLeftRadius="20px",m.style.borderTopRightRadius="20px",l.forEach((e=>{const t=[...e.children],l=e.dataset.gallery;void 0===i[l]&&(i[l]=[]),i[l]=i[l].concat(t)})),console.info("g",i);for(const e in i){console.info("gg",e);let t=0;i[e].forEach((l=>{l.style.cursor="pointer",l.dataset.number=t,l.addEventListener("click",(t=>{const l=t.currentTarget,s=l.dataset.image;o.dataset.currentPhoto=l.dataset.number,m.innerText=l.dataset.title,"undefined"===m.innerText?m.style.display="none":m.style.display="block",o.dataset.currentGallery=e,o.dataset.photoCount=i[e].length,n.innerHTML="",a.innerHTML=`<img id="agiZoom-img2" \n            style="max-width: 90%; max-height: 90%; display: block;border: 5px solid black" \n            src="${s}">`,r.style.opacity=1,y.style.opacity=1,o.style.display="block";const d=setInterval((()=>{Number(r.style.opacity)<0?clearInterval(d):(r.style.opacity-=.02,y.style.opacity-=.02)}),10)})),t++}))}function g(){let e=Number(o.dataset.currentPhoto)+1;e>o.dataset.photoCount-1&&(e=0);const t=i[o.dataset.currentGallery][e].dataset.image;a.innerHTML=`<img id="agiZoom-img2" \n            style="max-width: 90%; max-height: 90%; display: block;border: 5px solid black" \n            src="${t}">`,o.dataset.currentPhoto=e,m.innerText=i[o.dataset.currentGallery][e].dataset.title,"undefined"===m.innerText?m.style.display="none":m.style.display="block"}function h(){let e=o.dataset.currentPhoto-1;e<0&&(e=Number(o.dataset.photoCount)-1);const t=i[o.dataset.currentGallery][e].dataset.image;a.innerHTML=`<img id="agiZoom-img2" \n            style="max-width: 90%; max-height: 90%; display: block;border: 5px solid black" \n            src="${t}">`,o.dataset.currentPhoto=e,m.innerText=i[o.dataset.currentGallery][e].dataset.title,"undefined"===m.innerText?m.style.display="none":m.style.display="block"}function u(){o.style.display="none"}r.addEventListener("click",(e=>{h()})),y.addEventListener("click",(e=>{g()})),r.addEventListener("mouseover",(()=>{r.style.opacity=.6})),y.addEventListener("mouseover",(()=>{y.style.opacity=.6})),r.addEventListener("mouseout",(()=>{r.style.opacity=0})),y.addEventListener("mouseout",(()=>{y.style.opacity=0})),c.addEventListener("click",(e=>{u()})),c.addEventListener("mouseout",(()=>{c.style.opacity=.1})),c.addEventListener("mouseover",(()=>{c.style.opacity=1})),document.body.addEventListener("keydown",(e=>{"block"===o.style.display&&(console.info("k",e.code),"ArrowRight"===e.code?g():"ArrowLeft"===e.code?h():"Space"===e.code?g():"Escape"===e.code&&u())}))}()})();