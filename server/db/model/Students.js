const Sequelize = require('sequelize');
const db = require('../database');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://beyondtheboxresources.co.uk/wp-content/uploads/2017/07/avatar-student.png',
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

Student.beforeCreate(student => {
  const nameFirst = student.firstName;
  const nameLast = student.lastName;

  student.firstName =
    nameFirst[0].toUpperCase() + nameFirst.slice(1).toLowerCase();
  student.lastName =
    nameLast[0].toUpperCase() + nameLast.slice(1).toLowerCase();
});

module.exports = Student;
