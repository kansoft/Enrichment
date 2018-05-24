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

router.get('/:id', async (req, res, next) => {
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
});

module.exports = router;
