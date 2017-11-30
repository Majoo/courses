
/* Event listeners */
document.getElementById('details-close').addEventListener('click', close);
document.getElementById('details-next').addEventListener('click', next);
document.getElementById('details-prev').addEventListener('click', prev);

/* Functions */
function close() {
  console.log('close');
  document.getElementById('details-container').style.display = 'none';
}

function next() {
  alert('next');
}

function prev() {
  alert('prev');
}
