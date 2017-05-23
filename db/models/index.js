'use strict';

const User = require('./user')
const Campus = require('./campus')
const Student = require('./student')

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {User,Student, Campus}
