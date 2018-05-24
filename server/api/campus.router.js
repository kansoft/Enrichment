const router = require('express').Router();

const Campus = require('../db/model/Campuses');
const Student = require('../db/model/Students');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({ include: [Student] });
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

//we are not using this in the front end as we are filtering through in our reducer
/*router.get('/:id', async (req, res, next) => {
  try {
    let student = await Campus.findById(req.params.id, {
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

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
    });

    const campusWithStudents = await Campus.findById(newCampus.id, {
      include: { all: true },
    });

    res.status(201).json(campusWithStudents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
