import express from 'express';
import { 
    getUsers, 
    createUser, 
    getUser, 
    deleteUser, 
    updateUser,
    deleteUsers,
    } from '../controllers/useController.js';
import {loggedInUser} from '../controllers/user_login.js'

const router = express.Router(); 


router.get('/user', getUser); 
router.get('/users', getUsers);
router.post('/create-user', createUser); 
router.post('/delete', deleteUser);
router.post('/update', updateUser);
router.post('/deleteUsers', deleteUsers);
router.post('/login', loggedInUser)



export default router; 
