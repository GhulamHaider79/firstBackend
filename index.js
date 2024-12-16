import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/db.js'; 
import useRoutes from './src/routes/useRoutes.js'


dotenv.config();

connectDB()

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const port = process.env.PORT || 3000;

// Use user routes (order matters)
app.use('/api', useRoutes);


app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});





// import express from 'express';



// const app = express();


// const port = 3000

// app.get('./', (req, res) => {
// res.send('Hello ')
// })

// app.listen(port, () => {
//   console.log(`Sever Running on http://localhost:${port}`);
  
// })