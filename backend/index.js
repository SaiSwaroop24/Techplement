const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb+srv://swaroop:21pa1a1277@cluster0.646q6h1.mongodb.net/';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db;
client.connect().then(() => {
    db = client.db('myDatabase');
    console.log('MongoDB connection success');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    try {
        const collection = db.collection('mycollection'); 
        const user = await collection.findOne({ name });
        const uemail = await collection.findOne({ email });

        if (user || uemail) {
            return res.status(402).json({ message: 'User already exists' });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await collection.insertOne({ name, email, password: hashedPassword });
            res.status(201).json({ message: 'User created', userId: result.insertedId });
        }
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ message: 'Name and password are required' });
    }

    try {
        const collection = db.collection('mycollection'); 
        const user = await collection.findOne({ name });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(201).json({ message: 'Login successful' });
    } catch (err) {
        console.error('Error finding user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
