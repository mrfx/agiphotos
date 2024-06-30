import * as agiphotos from './agiphotos';



//agiphotos.slideshowStart('slideshow', options);
agiphotos.galleryZoom();


window.AGIslideshowStart = function ( pid, poptions ) {
  agiphotos.slideshowStart(pid, poptions);
}
