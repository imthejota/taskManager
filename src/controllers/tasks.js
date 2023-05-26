const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({ tasks })    
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
    
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })    
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID})
        !task? res.status(400).json({ msg: `No task with ID ${taskID}` }): res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {
            new:true, runValidators:true 
        })
        !task? res.status(400).json({ msg: `No task with ID ${taskID}` }): res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        !task? res.status(400).json({ msg: `No task with ID ${taskID}` }): res.status(200).json({ task: null, status: "Task deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}