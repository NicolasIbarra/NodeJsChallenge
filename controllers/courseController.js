const OrderCourses = (req, res) => {
    try {
        req = req.body;
        let sortedList = OrderAlgorithm(req.courseList)
        res.send({ sortedList });
    } catch {
        throw new Error('Failed to ordering courses');
    }
}

function GetRootCourses(courses) {
  let notDesiredCourses = [];
  
  for(let i = 0; i < courses.length; i++){
    let isDesired = false;

    for(let j = 0; j < courses.length; j++){
      if(courses[i].requiredCourse == courses[j].desiredCourse){
        isDesired = true;
      }
    }

    if(!isDesired && !notDesiredCourses.some(c => c == courses[i].requiredCourse)){
      notDesiredCourses.push(courses[i]);
    }
  }
  return notDesiredCourses;
}

function GetNextCourses(rootCourses, pendingCourses, arePendingCourses){
  arePendingCourses = false;
  return rootCourses;
}

function OrderAlgorithm(courses) {
  let rootCourses = GetRootCourses(courses);

  let sortedList;
  let arePendingCourses = true;
  while(arePendingCourses) {
    sortedList = GetNextCourses(rootCourses, courses, arePendingCourses);
  }

  return sortedList;
}

module.exports = { OrderCourses }