const router = require('express').Router();

const Campus = require('../db/model/Campuses');
const Student = require('../db/model/Students');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
