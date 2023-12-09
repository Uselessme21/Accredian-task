const bcrypt = require('bcrypt');
const db = require('../db/db');
const jwt=require('jsonwebtoken');


const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
  
    const existingUser = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      'INSERT INTO users (username, email, hashed_password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );


    res.status(201).json({ message: 'User signedUp successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
   
    const results = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length > 0) {
      
      const match = await bcrypt.compare(password, results[0].hashed_password);
      if (match) {
      
        const token = jwt.sign({ userId: results[0].id, email: results[0].email }, 'SECRET_KEY', {
          expiresIn: '1h',
        });

     
        res.status(200).json({ message: 'Login successful', token });
      } else {
      
        res.status(401).json({ error: 'Invalid password !' });
      }
    } else {
     
      res.status(404).json({ error: 'User not found !' });
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  signup,
  login,
};
