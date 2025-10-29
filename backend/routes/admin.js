const express = require('express');
const Video = require('../models/Video');
const router = express.Router();
const jwt = require('jsonwebtoken');

// middleware admin
const adminAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Non autorisé' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) return res.status(403).json({ error: 'Accès refusé' });
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
};

// ajouter vidéo
router.post('/add', adminAuth, async (req, res) => {
  const { title, url } = req.body;
  try {
    const video = await Video.create({ title, url });
    res.json({ message: 'Vidéo ajoutée', video });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// supprimer vidéo
router.delete('/delete/:id', adminAuth, async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vidéo supprimée' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
