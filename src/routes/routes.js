const {Router} = require('express')
const router = Router()
const {getAllTasks, createTask, getTask, deleteTask, updateTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)


module.exports = router