const express = require('express');
const Video = require('../models/Video');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');

// middleware auth
const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Non autorisé' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token invalide' });
  }
};

// liste des vidéos
router.get('/', auth, async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
});

// regarder une vidéo
router.post('/watch/:id', auth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Vidéo non trouvée' });
    video.views += 1;
    await video.save();

    const user = await User.findById(req.user.id);
    user.tokens += 1; // 1 centime par vidéo
    user.videosWatched += 1;
    await user.save();

    res.json({ message: 'Vidéo visionnée', tokens: user.tokens });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
