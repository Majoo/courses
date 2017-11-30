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
  if (this.classList.contains('details-shown')) {
    hideDetails(this);
  }
  else {
    showDetails(this);
  }
}

function showDetails(element) {
  let course = getCourse(element.id);

  //Update details with this course's attributes.
  let details = document.getElementById('details');
  details.innerHTML = '<h2 class="details-heading">'+course.name+'</h2>' +
                      '<p class="school">'+course.school+'</p>' +
                      '<p class="degree">'+course.degree+'</p>' +
                      '<p class="ects">'+course.ects+' ECTS</p>' +
                      '<p class="description">'+course.description+'</p>';

  //Show details
  document.getElementById('details-container').style.display = 'block';
  //Update the clicked item.
  element.classList.add('details-shown');
}

function hideDetails(element) {
  element.classList.remove('details-shown');

}
