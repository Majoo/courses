/* JS File */

var thumbnails = document.getElementById('thumbnails');

for(c in courses){
  let thumb = document.createElement('div');
  thumb.id = courses[c].id;
  thumb.className = 'course';
  thumb.innerHTML = '<p class="thumb-heading">'+courses[c].name+'</p>';

  thumb.addEventListener('click', toggleDetails);
  thumbnails.appendChild(thumb);
}

function toggleDetails(){
  if ( document.getElementById('details-container').style.display == 'none' ) {
    showDetails(this.id);
  }
  else {
    hideDetails();
  }
}

function showDetails(courseId) {
  let course = getCourse(courseId);

  //Update details with this course's attributes.
  let details = document.getElementById('details');
  details.innerHTML = '<h2 class="details-heading">'+course.name+'</h2>' +
                      '<p class="school">'+course.school+'</p>' +
                      '<p class="degree">'+course.degree+'</p>' +
                      '<p class="ects">'+course.ects+' ECTS</p>' +
                      '<p class="description">'+course.description+'</p>';
  details.setAttribute('data-courseId', course.id);

  //Show details
  document.getElementById('details-container').style.display = 'flex';
  document.getElementById('thumbnails').style.display = 'none';
  //Update the clicked item.
}

function hideDetails() {
  document.getElementById('details-container').style.display = 'none';
  document.getElementById('thumbnails').style.display = 'flex';
}
