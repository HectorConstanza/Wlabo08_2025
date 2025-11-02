// routes/user.routes.js
import { Router } from 'express'
import {
  displayHome,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './controladores/controllers.js'
import verifyToken from './middlewares/verifyToken.js'

const router = Router()

// public home route
router.get('/', displayHome)

// protected user routes using the imported controller functions
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/users', verifyToken, createUser);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

export default router
