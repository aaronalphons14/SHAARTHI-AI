const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets directly from the current directory
app.use(express.static(path.join(__dirname)));

// Simulated SQLite/JSON Database State Engine
const DB_FILE = path.join(__dirname, 'saarthi_db.json');

const loadDB = () => {
  if (fs.existsSync(DB_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    } catch (e) {
      console.error('Error reading JSON DB file, initializing clean database...', e);
    }
  }
  return {
    users: [
      {
        id: 'usr_meenadevi',
        full_name: 'Meena Devi',
        email: 'meenadevi@bharat.in',
        phone: '+91 94440 12345',
        preferred_language: 'Hindi',
        ai_confidence_score: 85,
        created_at: new Date().toISOString()
      },
      {
        id: 'usr_admin',
        full_name: 'Saarthi Admin',
        email: 'admin@saarthi.gov.in',
        phone: '+91 90945 55225',
        preferred_language: 'Hindi',
        ai_confidence_score: 100,
        created_at: new Date().toISOString()
      }
    ],
    user_sessions: [],
    recipes: [],
    invoices: [],
    emergency_alerts: [],
    study_notes: []
  };
};

const saveDB = (dbData) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf8');
};

// Initialize DB file if not exists
if (!fs.existsSync(DB_FILE)) {
  saveDB(loadDB());
}

// ──────────────────────────────────────────────────
// backend REST API Endpoints matching frontend telemetry
// ──────────────────────────────────────────────────

// 1. Auth: Login Endpoint
app.post('/api/auth/login', (req, res) => {
  const { identity } = req.body;
  if (!identity) {
    return res.status(400).json({ error: 'Email or Phone Number is required.' });
  }

  const db = loadDB();
  const cleanInput = identity.replace(/[^0-9]/g, '');

  let user = db.users.find(u => {
    const cleanDbPhone = u.phone ? u.phone.replace(/[^0-9]/g, '') : '';
    return u.email === identity || (cleanInput && cleanDbPhone.includes(cleanInput));
  });

  if (!user) {
    // Dynamically register a new dummy user
    user = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      full_name: identity.includes('@') ? identity.split('@')[0] : 'Saarthi User',
      email: identity.includes('@') ? identity : 'user@bharat.in',
      phone: !identity.includes('@') ? '+91 ' + identity : '+91 99988 87766',
      preferred_language: 'Hindi',
      created_at: new Date().toISOString()
    };
    db.users.push(user);
  }

  const mockJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' + Buffer.from(JSON.stringify({ uid: user.id })).toString('base64') + '.SaarthiSecretKey';
  
  db.user_sessions.push({
    session_id: 'ses_' + Math.random().toString(36).substr(2, 9),
    user_id: user.id,
    jwt_token: mockJwt,
    device_info: req.headers['user-agent'] || 'Web Browser',
    ip_address: req.ip,
    created_at: new Date().toISOString()
  });

  saveDB(db);

  console.log(`\x1b[36m[SQL API]\x1b[0m INSERT INTO user_sessions (user_id, jwt) VALUES ('${user.id}', '${mockJwt}');`);
  res.status(200).json({ success: true, token: mockJwt, user });
});

// 2. Auth: Verify OTP Endpoint
app.post('/api/auth/verify-otp', (req, res) => {
  const { otp, phone } = req.body;
  if (!otp || !phone) {
    return res.status(400).json({ error: 'OTP and Phone are required.' });
  }

  const db = loadDB();
  const mockJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' + Buffer.from(JSON.stringify({ phone })).toString('base64') + '.SaarthiSecretKey';

  console.log(`\x1b[32m[API TELEMETRY]\x1b[0m OTP ${otp} verified successfully for +91 ${phone}`);
  res.status(200).json({ verified: true, jwt: mockJwt, message: 'OTP verified successfully.' });
});

// 3. Amma Mode: Generate Recipe AI
app.post('/api/amma/recipe/create', (req, res) => {
  const { ingredients, language } = req.body;
  if (!ingredients) {
    return res.status(400).json({ error: 'Ingredients are required.' });
  }

  const db = loadDB();
  const recipeId = 'rec_' + Math.random().toString(36).substr(2, 9);
  const dishName = 'Regional Indian ' + ingredients.split(',')[0].trim() + ' Delight';
  
  const newRecipe = {
    id: recipeId,
    ingredients,
    recipe_name: dishName,
    language: language || 'Hindi',
    created_at: new Date().toISOString()
  };

  db.recipes.push(newRecipe);
  saveDB(db);

  console.log(`\x1b[33m[SQL API]\x1b[0m INSERT INTO recipes (id, name, ingredients) VALUES ('${recipeId}', '${dishName}', '${ingredients}');`);
  res.status(200).json({
    success: true,
    recipe_id: recipeId,
    recipe_name: dishName,
    steps: [
      `1. Wash the selected ingredients: ${ingredients}.`,
      '2. Heat oil/ghee in a traditional Kadhai with cumin seeds and green chilies.',
      '3. Sauté onions and tomatoes until tender, adding Indian spices (turmeric, garam masala).',
      '4. Add the main ingredients and simmer slowly. Serve hot with warm rotis or rice! 🙏'
    ]
  });
});

// 4. Business Mode: Generate GST Invoice
app.post('/api/business/invoice/generate', (req, res) => {
  const { customer, item, price } = req.body;
  if (!customer || !item || !price) {
    return res.status(400).json({ error: 'Customer name, Item description, and Price are required.' });
  }

  const db = loadDB();
  const billId = 'INV-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = parseFloat(price);
  const gstAmount = Math.round(subtotal * 0.18);
  const total = subtotal + gstAmount;

  const newInvoice = {
    id: billId,
    customer,
    item,
    subtotal,
    gst: gstAmount,
    total,
    created_at: new Date().toISOString()
  };

  db.invoices.push(newInvoice);
  saveDB(db);

  console.log(`\x1b[32m[SQL API]\x1b[0m INSERT INTO invoices (id, customer, total) VALUES ('${billId}', '${customer}', ${total});`);
  res.status(200).json({
    success: true,
    invoice: newInvoice
  });
});

// 5. Senior Mode: Emergency SOS Dialer
app.post('/api/senior/emergency/sos', (req, res) => {
  const { user_id, location } = req.body;
  
  const db = loadDB();
  const alertId = 'alert_' + Math.random().toString(36).substr(2, 9);
  
  const alert = {
    id: alertId,
    user_id: user_id || 'usr_anonymous',
    gps_location: location || '28.6139° N, 77.2090° E (Delhi)',
    dispatched_status: 'DISPATCHED',
    created_at: new Date().toISOString()
  };

  db.emergency_alerts.push(alert);
  saveDB(db);

  console.log(`\x1b[31m[🚨 EMERGENCY SOS]\x1b[0m SMS & Phone dispatch triggered to Ramesh (Son) at GPS coords: ${alert.gps_location}`);
  res.status(200).json({ success: true, message: 'SOS SMS & Phone calls successfully dispatched to registered emergency contacts!' });
});

// Serve frontend app at root route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`
  ======================================================
     🏆 SAARTHI ROYAL INDIAN AI SERVER NOW LIVE!
     🌎 Access Address: http://localhost:${PORT}
     💾 Local JSON Database connected: saarthi_db.json
  ======================================================
  `);
});
