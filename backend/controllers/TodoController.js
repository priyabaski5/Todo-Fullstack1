 const TodoModel = require('../models/TodoModel')

 //To get all todos
 module.exports.getTodo = async(req,res) =>
 {
    const todo = await TodoModel.find()
    res.send(todo)
 }

 //Save a todo
 module.exports.saveTodo = async(req,res) =>
 {
    const { text } = req.body
    TodoModel
    .create( {text} )
    .then((data) => {
        console.log("Task added successfully!");
        console.log(data);
        res.send(data);
    })
 }

 //Update a todo
 module.exports.updateTodo = async(req,res) =>
 {
    const { _id,text } = req.body
    TodoModel
        .findByIdAndUpdate(_id , {text})
        .then (()=> {
            res.send("Updated successfully!");
        })
        .catch((err)=> {
            console.log(err) 
        })
 }

 //Delete a todo
 module.exports.deleteTodo = async(req,res) =>
    {
       const { _id } = req.body
       TodoModel
           .findByIdAndDelete(_id)
           .then (()=> {
               res.send("Deleted successfully!");
           })
           .catch((err)=> {
               console.log(err) 
           })
    }