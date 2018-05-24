'use strict';

const db = require('./database');

//import models
const Campus = require('./model/Campuses');
const Student = require('./model/Students');

//associations
Student.belongsTo(Campus);
Campus.hasMany(Student, {
  foreignKey: 'campusId',
  onDelete: 'cascade',
  hooks: true,
});

module.exports = {
  db,
  Student,
  Campus,
};
