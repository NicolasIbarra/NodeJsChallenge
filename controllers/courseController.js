const OrderCourses = (req, res) => {
    try {
        req = req.body;
        let result = OrderAlgorithm(req)
        res.send({ test: "hola" });
    } catch {
        throw new Error('Failed to ordering courses');
    }
}

function OrderAlgorithm(jsonInput) {
    const { userId, courseList } = jsonInput;

    const studyPlan = [];
    const pendingCourses = [...courseList];
    
    for (let i = 0; i < pendingCourses.length; i++) {
        console.log("llego")
        
        for (let j = 0; j < cursosPendientes.length; j++) {
            const { desiredCourse, requiredCourse } = cursosPendientes[i];
            console.log(cursosPendientes[i])
            
        // Si el prerequisito ya está en el plan o no tiene prerequisito
        // if (!requiredCourse || planEstudio.includes(requiredCourse)) {
        //   planEstudio.push(desiredCourse); // Agregar el curso al plan
        //   cursosPendientes.splice(i, 1); // Remover de los pendientes
        //   break; // Reiniciar la búsqueda
        // }
      }
    }
  
    return {
      userId,
      orderedCourses: planEstudio,
    };
  }

module.exports = { OrderCourses }