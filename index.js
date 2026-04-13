const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 4000;

app.use(express.json());

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'Astrain948!',
  database: 'panamacats',
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 5,
});

// GET all visits
app.get('/api/visits', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, taller, ubicacion, contacto, num, comentarios, todo FROM visitas_talleres ORDER BY id');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new visit
app.post('/api/visits', async (req, res) => {
  try {
    const { taller, ubicacion, contacto, num, comentarios, todo } = req.body;
    const [result] = await pool.query(
      'INSERT INTO visitas_talleres (taller, ubicacion, contacto, num, comentarios, todo) VALUES (?, ?, ?, ?, ?, ?)',
      [taller || '', ubicacion || '', contacto || '', num || '', comentarios || '', todo || '']
    );
    res.json({ id: result.insertId, taller, ubicacion, contacto, num, comentarios, todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update visit
app.put('/api/visits/:id', async (req, res) => {
  try {
    const { taller, ubicacion, contacto, num, comentarios, todo } = req.body;
    await pool.query(
      'UPDATE visitas_talleres SET taller=?, ubicacion=?, contacto=?, num=?, comentarios=?, todo=? WHERE id=?',
      [taller || '', ubicacion || '', contacto || '', num || '', comentarios || '', todo || '', req.params.id]
    );
    res.json({ id: Number(req.params.id), taller, ubicacion, contacto, num, comentarios, todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE visit
app.delete('/api/visits/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM visitas_talleres WHERE id=?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('SIUL Recycling running on 0.0.0.0:' + PORT);
});
