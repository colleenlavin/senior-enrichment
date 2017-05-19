'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models/campus')
const Student = require('../db/models/student')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))

//Get all the campuses
api.get('/campus', function (req, res, next) {
	Campus.findAll({
		where: req.query
	})
		.then(function (campuses) {
			res.status(200).json(campuses)
		})
		.catch(next);
})
//Get one campus
api.get('/campus/:campusId', function (req, res, next) {
	Campus.findById(req.params.campusId)
		.then(function (campus) {
			if (!campus) {
				res.sendStatus(404);
			}
			res.status(200).send(campus);
		})
		.catch(next);
});

//Get all students
api.get('/students', function (req, res, next) {
	Student.findAll({
		where: req.query
	})
		.then(function (students) {
			res.status(200).send("HI ME")
		})
		.catch(next);
});
// Get One student
api.get('/students/:studentId', function (req, res, next) {
	Student.findById(req.params.studentId)
		.then(function (student) {
			if (!student) {
				res.sendStatus(404);
			}
			res.status(200).send(student);
		})
		.catch(next);
});

//Post new campus
api.post('/campus', function (req, res, next) {
	Campus.create(req.body)
		.then(campus => {
			console.log(campus)
			res.status(201).send(campus)
		})
		.catch(next);
});

//post new student
api.post('/students', function (req, res, next) {
	Student.create(req.body)
		.then(student => {
			console.log(student)
			res.status(201).send(student)
		})
		.catch(next);
})

//Update student info for one student
api.put('/students/:studentId', function (req, res, next) {
    Student.findById(req.params.studentId)
        .then(function (student) {
             if(!student){
                res.sendStatus(404);
            }
            return student.update(req.body);
        })
        .then(function (newStudent) {
            res.send(newStudent);
        })
        .catch(next);
});

//Update campus info for one campus
api.put('/campus/:campusId', function (req, res, next) {
    Campus.findById(req.params.campusId)
        .then(function (campus) {
             if(!campus){
                res.sendStatus(404);
            }
            return campus.update(req.body);
        })
        .then(function (newCampus) {
            res.send(newCampus);
        })
        .catch(next);
});

// Delete a campus
api.delete('/:campusId', (req, res, next) => {
    Campus.findById(req.params.campusId)
        .then(function (campus) {
            return campus.destroy()
        })
        .then(function () {
            res.send('This campus has exploded!')
        })
});

//Delete a student
api.delete('/:bookId', (req, res, next) => {
    Student.findById(req.params.studentId)
        .then(function (student) {
            return student.destroy()
        })
        .then(function () {
            res.send('The student no longer exists!')
        })
});
module.exports = api