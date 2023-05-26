const {Router} = require('express')
const router = Router()
const {getAllTasks, createTask, getTask, deleteTask, updateTask} = require('../controllers/tasks')

// router.get('/v1/tasks)
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)
// router.post('/v1/tasks)
// router.get ('/v1/tasks/:id)
// router.put ('/v1/tasks/:id)
// router.delete ('/v1/tasks/:id)


module.exports = router