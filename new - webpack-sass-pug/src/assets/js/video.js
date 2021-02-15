/**
 * Play Video - codigo rhuan.dev
 * @type {Element}
 */

const playButton = document.querySelector('.btn-play');
const embedWrapper = document.querySelector('.video');

playButton.addEventListener('click', function (e) {
  e.preventDefault();

  // get id vimeo
  const idVideoVimeo = this.getAttribute('data-vimeo-id');
  const idVideoYouTube = this.getAttribute('data-youtube-id');
  // const idVideo = this.getAttribute('data-video-id');

  // apply video embed

  if (idVideoYouTube !== "") {
    embedWrapper.innerHTML = `<iframe width="1189" height="669" src="https://www.youtube.com/embed/${idVideoYouTube}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
  // if (idVideo !== "") {
  //     embedWrapper.innerHTML = `<video width="560" height="315" controls autoplay class="btn-play" ><source src="${idVideo}" type="video/mp4">Seu navegador nao suporta este video</video>`;
  // }
  else {
    embedWrapper.innerHTML = `<iframe title="vimeo-player" src="https://player.vimeo.com/video/${idVideoVimeo}?autoplay=1&loop=1"  width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  }
});

