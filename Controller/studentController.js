const express = require('express');
const Student = require('../Model/model');

// Show the list of students
const index = (req,res,next) => {
  Student.find().then(response =>{
    res.json({
      response
    })
  }).catch(error => {
    res.json({
      message: "An error Occured!" + error 
    })
  })
}


// Find only one person
const getData = async (req,res,next) => {
  let studentID = req.body.studentID
  Student.findById(studentID).then(response => {
    res.json({
      response
    })
  }).catch((err)=>{
      res.json({
        message : `An error ocurred!`
      })
  })
}

// Adding data 
const createData = (req,res,next) => {
  let student = new Student({
    name: req.body.name,
    Batch: req.body.Batch,
    age: req.body.age,
    Email: req.body.Email
  })
  student.save().then(response => {
    res.json({
      message: `Student added Successfully!!`
    })
  }).catch(error => {
    res.json({
      message: `An error Occurred!`
    })
  })
}

// Update 
const updateData = (req,res,next) => {
  let studentID = req.body.studentID

  let updatedData = {
    name: req.body.name,
    Batch: req.body.Batch,
    age: req.body.age,
    Email: req.body.Email
  }

  Student.findByIdAndUpdate(studentID, {$set: updatedData})
  .then(()=>{
    res.json({
      message:  `Student updated successfully`
    })
  }).catch(error => {
    res.json({
      message: `An error Occurred`
    })
  })
}

// Delete 
const deleteData = (req,res,next) => {
  let studentID = req.body.studentID
  Student.findOneAndDelete(studentID).then(()=>{
    res.json({
      message: `Student deleted successfully`
    })
  }).catch(error => {
    res.json({
      message: `An error occurred!!` + error
    })
  })
}

module.exports  ={ 
  index , getData , createData , updateData , deleteData
}

