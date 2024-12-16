import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/useController.js'; // Importing the controller

const router = express.Router(); 


router.get('/user', getUser); 
router.get('/users', getUsers);
router.post('/create-user', createUser); 
router.post('/delete', deleteUser);
router.post('/update', updateUser);



export default router; 
