function getCourse(courseId) {
  console.log('getCourse: '+courseId);
  for(c in courses){

    if (courses[c].id == courseId) {
      return courses[c];
    }

  }
}


// function getName(courseId) {
//   for(c in courses){
//
//     if (courses[c].id == courseId) {
//       return courses[c].name;
//     }
//     else {
//       return '';
//     }
//   }
// }
//
// function getDegree(courseId) {
//   for(c in courses){
//
//     if (courses[c].id == courseId) {
//       return courses[c].degree;
//     }
//     else {
//       return '';
//     }
//   }
// }
//
// function getSchool(courseId) {
//   for(c in courses){
//
//     if (courses[c].id == courseId) {
//       return courses[c].school;
//     }
//     else {
//       return '';
//     }
//   }
// }
//
// function getECTS(courseId) {
//   for(c in courses){
//
//     if (courses[c].id == courseId) {
//       return courses[c].ects;
//     }
//     else {
//       return '';
//     }
//   }
// }
//
// function getTags(courseId) {
//   for(c in courses){
//
//     if (courses[c].id == courseId) {
//       return courses[c].tags;
//     }
//     else {
//       return '';
//     }
//   }
// }
//
// function getDescription(courseId) {
//   for(c in courses){
//
//     if (courses[c].id == courseName) {
//       return courses[c].description;
//     }
//     else {
//       return '';
//     }
//   }
// }
