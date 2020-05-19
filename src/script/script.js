const button = document.getElementById('gift');
gifts = [
  'Macbook Pro 16 pulgadas',
  'Iphone 15 Max',
  'Viaje a Marbella',
  'BMW Serie 2 Gran Coupé',
  'Apple Watch serie 5',
  'Curso de FrontEnd para Dummies',
];
const getGift = (gifts) => {
  max = gifts.length;
  randomNumber = Math.floor(Math.random() * Math.floor(max));
  return gifts[randomNumber];
};
const openGift = () => alert(`Enhorabuena, te acaba de tocar un ${getGift(gifts)}`);

button.addEventListener('click', openGift);

(function () {
  var v = document.getElementsByClassName('reproductor');
  for (var n = 0; n < v.length; n++) {
    var p = document.createElement('div');
    p.innerHTML = labnolThumb(v[n].dataset.id);
    p.onclick = labnolIframe;
    v[n].appendChild(p);
  }
})();
function labnolThumb(id) {
  return (
    '<img class="imagen-previa" src="//i.ytimg.com/vi/' +
    id +
    '/hqdefault.jpg"><div class="youtube-play"></div>'
  );
}
function labnolIframe() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute(
    'src',
    '//www.youtube.com/embed/' +
      this.parentNode.dataset.id +
      '?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0'
  );
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('id', 'youtube-iframe');
  this.parentNode.replaceChild(iframe, this);
}
