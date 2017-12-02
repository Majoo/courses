function getCourse(courseId) {
  console.log('getCourse: '+courseId);
  for(c in courses){

    if (courses[c].id == courseId) {
      return courses[c];
    }

  }
}

function existsCourse(courseId) {
  for(c in courses) {
    if (courses[c].id == courseId) {
      return true;
    }
  }

  return false;
}

function getFirstCourseId() {
  return 1;
}

function getLastCourseId() {
    return 10;
}
