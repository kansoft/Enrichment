#!/usr/bin/env node

const { db, Student, Campus } = require('../server/db');
const avatar = require('cartoon-avatar');

const seed = async () => {
  await db.sync({ force: true });

  //********************** CAMPUSES ****************************/
  const nyc = await Campus.create({
    name: 'NYC Campus',
    address: '5 Hanover Square floor 25, New York, NY 10004',
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/08/31/05/36/new-york-2699520_1280.jpg',
    description:
      'A super super place to be! Located at FiDi with some amazing people studying here ',
  });
  const rome = await Campus.create({
    name: 'Rome Campus',
    address: 'Via Tolmino, 6, 00198 Roma RM, Italy',
    imageUrl:
      'https://www.telegraph.co.uk/content/dam/Travel/leadAssets/26/96/Rome_2696260a.jpg?imwidth=450',
    description: `The world is waiting. Learn a language abroad. See the world, experience a new culture, and make friends from around the world as you prepare for your global future. EF's fun and interactive classes help you learn faster while living the language first hand. Earn college credit, participate in an internship, and explore your dream destination abroad. Start any Monday and study from two weeks and up, or join us for a semester or Gap Year abroad.`,
  });
  const chicago = await Campus.create({
    name: 'Chicago Campus',
    address: '405 W Superior St, Chicago, IL 606544',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/11/06/23/51/chicago-1804479__480.jpg',
    description: `Teaching an advanced JavaScript curriculum, Fullstack Academy Chicago is the Midwest's premier coding bootcamp.`,
  });
  const mumbai = await Campus.create({
    name: 'Mumbai Campus',
    address: 'A Rd, Churchgate, Mumbai, Maharashtra 400020, India',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_1280.jpgg',
    description: `The world is waiting. Learn a language abroad. See the world, experience a new culture, and make friends from around the world as you prepare for your global future. EF's fun and interactive classes help you learn faster while living the language first hand. Earn college credit, participate in an internship, and explore your dream destination abroad. Start any Monday and study from two weeks and up, or join us for a semester or Gap Year abroad.`,
  });

  //********************** STUDENTS ****************************/
  const pankti = await Student.create({
    firstName: 'Pankti',
    lastName: 'Parikh',
    email: 'pankti@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'female' }),
    gpa: 4.0,
    campusId: nyc.id,
  });
  const harry = await Student.create({
    firstName: 'Harry',
    lastName: 'Doshi',
    email: 'harry@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'male' }),
    gpa: 4.0,
    campusId: rome.id,
  });
  const peter = await Student.create({
    firstName: 'Peter',
    lastName: 'Darian',
    email: 'peter@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'male' }),
    gpa: 2.0,
    campusId: rome.id,
  });
  const sally = await Student.create({
    firstName: 'Sally',
    lastName: 'Smith',
    email: 'sally@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'female' }),
    campusId: nyc.id,
  });
  const kerry = await Student.create({
    firstName: 'Kerry',
    lastName: 'Smith',
    email: 'kerry@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'female' }),
    gpa: 2.6,
    campusId: chicago.id,
  });
  const pierre = await Student.create({
    firstName: 'Pierre',
    lastName: 'Mendy',
    email: 'pierre@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'male' }),
    gpa: 2.6,
    campusId: chicago.id,
  });
  const dan = await Student.create({
    firstName: 'Dan',
    lastName: 'Ebner',
    email: 'dan@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'male' }),
    gpa: 3.5,
    campusId: nyc.id,
  });
  const sarah = await Student.create({
    firstName: 'Sarah',
    lastName: 'Fitzmaurice',
    email: 'sarah@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'female' }),
    campusId: mumbai.id,
  });
  const nora = await Student.create({
    firstName: 'Nora',
    lastName: 'Herbstmen',
    email: 'nora@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'female' }),
    campusId: mumbai.id,
  });
  const dhwani = await Student.create({
    firstName: 'Dhwani',
    lastName: 'Patel',
    email: 'dhwani@gmail.com',
    imageUrl: avatar.generate_avatar({ gender: 'female' }),
    campusId: rome.id,
  });

  //********************** SYNC DB ****************************/
  db.close();
  console.log(`

    Seeding successful!
    We are now ready to rock!

  `);
};

seed().catch(err => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
