
/* Event listeners */
document.getElementById('details-close').addEventListener('click', close);
document.getElementById('details-next').addEventListener('click', next);
document.getElementById('details-prev').addEventListener('click', prev);

/* Buttons on details pane */
function close() {
  hideDetails();
}

function next() {
  let currentCourseId = parseInt( document.getElementById('details').getAttribute('data-courseId') );

  if ( existsCourse(currentCourseId + 1) ) {
    showDetails( parseInt(currentCourseId) + 1 );
  } else {
    showDetails( getFirstCourseId() );
  }

}

function prev() {
  let currentCourseId = parseInt( document.getElementById('details').getAttribute('data-courseId') );

  if ( existsCourse(currentCourseId - 1) ) {
    showDetails( parseInt(currentCourseId) - 1 );
  } else {
    showDetails( getLastCourseId() );
  }
}
