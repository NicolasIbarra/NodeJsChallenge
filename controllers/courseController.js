const OrderCourses = (req, res) => {
    try {
        req = req.body;
        let result = OrderAlgorithm(req)
        res.send({ result });
    } catch {
        throw new Error('Failed to ordering courses');
    }
}

function OrderAlgorithm(jsonInput) {
    const { userId, courseList } = jsonInput;

    const studyPlan = [];
    const pendingCourses = [...courseList];
    
    for (let i = 0; i < pendingCourses.length; i++) {
        
      // for (let j = 0; j < pendingCourses.length; j++) {

        console.log(pendingCourses[i])
        // if(pendingCourses[i].requiredCourse == pendingCourses[j].desiredCourse){
        //   let movingCourse = pendingCourses.splice(pendingCourses[j], 1);
        //   pendingCourses.splice(pendingCourses[i-1], 0, movingCourse);
        // }
          
      // Si el prerequisito ya está en el plan o no tiene prerequisito
      // if (!requiredCourse || planEstudio.includes(requiredCourse)) {
      //   planEstudio.push(desiredCourse); // Agregar el curso al plan
      //   cursosPendientes.splice(i, 1); // Remover de los pendientes
      //   break; // Reiniciar la búsqueda
      // }
      // }
    }
  
    return {
      userId,
      pendingCourses,
    };
  }

module.exports = { OrderCourses }