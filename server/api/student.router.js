const router = require('express').Router();

const Campus = require('../db/model/Campuses');
const Student = require('../db/model/Students');

//*-----------------     ROUTES     -----------------*/

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({ include: [Campus] });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      campusId: req.body.campusId,
    });

    const studentsWithCampuses = await Student.findById(newStudent.id, {
      include: { all: true },
    });

    res.status(201).json(studentsWithCampuses);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    let [updatedRowCount, updatedStudentInfo] = await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });

    const studentsWithCampuses = await Student.findById(updatedStudentInfo.id, {
      include: { all: true },
    });

    res.send(studentsWithCampuses);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;

//we are not using this in the front end as we are filtering through in our reducer
/*router.get('/:id', async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id, {
      include: [{ all: true }],
    });
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (err) {
    next(err);
  }
});*/
