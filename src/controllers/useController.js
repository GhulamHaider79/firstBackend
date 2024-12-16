import User from '../models/user.js';


export const createUser = async ( req, res ) => {
    const { name, email, password } = req.body; 
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
       
    } catch (error) {
        res.status(400).json({message : 'invalid user Data ', error: error.message })
    }
};


// Get all users
export const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Server Error ' });
    }
  };

  // Get use by Email

  export const getUser = async (req, res) => {
    
    try {

      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' }); // Return if user is not found
      }
      res.status(200).json({user})
    } catch (error) {
      res.status(401).json({ message: 'User not found' });
    }
  }


  // delete user by id

  export const deleteUser = async (req, res) => {

    try {
      const response = await User.findOneAndDelete({ email: req.body.email });
      if (!response) {
        return res.status(404).json({ message: 'User not found' }); 
      }

      res.status(200).json({ message: 'User deleted successfully', response });
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };


  // update user 

  export const updateUser = async (req, res) => {
  try {
    const updatedUser  = await User.findOneAndUpdate(
      { email: req.body.email }, 
       req.body,  
      { new: true});

      if (!updatedUser) {
        return res.status(404).json({message : 'User not found'});
      }

    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({message : 'invalid user Data ', error: error.message })
  }
  };




  