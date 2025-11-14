const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'reddyhotel'; // Change this!

const DATA_FILE = path.join(__dirname, 'data', 'contacts.json');
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DATA_FILE);
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
  
  // Initialize files if they don't exist
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
  
  try {
    await fs.access(USERS_FILE);
  } catch {
    const defaultUser = {
      username: 'admin',
      password: await bcrypt.hash(ADMIN_PASSWORD, 10),
      role: 'admin'
    };
    await fs.writeFile(USERS_FILE, JSON.stringify([defaultUser], null, 2));
  }
}

// Helper functions
async function readContacts() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeContacts(contacts) {
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2));
}

async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Auth middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const contacts = await readContacts();
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    contacts.push(newContact);
    await writeContacts(contacts);

    res.status(201).json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      id: newContact.id
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Admin login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const users = await readUsers();
    const user = users.find(u => u.username === username);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      token,
      user: { username: user.username, role: user.role }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Get all contacts (Admin only)
app.get('/api/admin/contacts', authenticateToken, async (req, res) => {
  try {
    const contacts = await readContacts();
    res.json({ success: true, contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Get single contact (Admin only)
app.get('/api/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const contacts = await readContacts();
    const contact = contacts.find(c => c.id === req.params.id);
    
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    res.json({ success: true, contact });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
});

// Update contact status (Admin only)
app.put('/api/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const { status, notes } = req.body;
    const contacts = await readContacts();
    const index = contacts.findIndex(c => c.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    if (status) contacts[index].status = status;
    if (notes !== undefined) contacts[index].notes = notes;
    contacts[index].updatedAt = new Date().toISOString();
    
    await writeContacts(contacts);
    res.json({ success: true, contact: contacts[index] });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Delete contact (Admin only)
app.delete('/api/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const contacts = await readContacts();
    const filtered = contacts.filter(c => c.id !== req.params.id);
    
    if (contacts.length === filtered.length) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    
    await writeContacts(filtered);
    res.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

// Initialize server
async function startServer() {
  await ensureDataDir();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Admin default password: ${ADMIN_PASSWORD}`);
    console.log('Change ADMIN_PASSWORD in .env file for production!');
  });
}

startServer();

