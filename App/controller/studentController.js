const Student = require('../model/Student')
class Studentcontroller{
     async registerStudent(req,res){
        try {
          const { name, rollNumber, branch, year, email } = req.body;
          const student = new Student({
            name,
            rollNumber,
            branch,
            year,
            email,
          });
          await student.save();
          res.status(201).json(student);
        } catch (err) {
          res.status(400).json({ error: err.message });
        }
     }
     async homepage(req,res){
      try{
         res.redirect('/todos')
      }catch(err){

      }
     }
}

module.exports =new Studentcontroller()