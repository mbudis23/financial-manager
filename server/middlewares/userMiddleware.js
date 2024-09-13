const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Ambil JWT Secret dari .env
const JWT_SECRET = process.env.JWT_SECRET;

exports.authenticateToken = (req, res, next) => {
  // Ambil token dari header Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Ambil token dari "Bearer token"

  if (token == null) return res.status(401).json({ message: 'Token tidak ditemukan.' });

  // Verifikasi token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token tidak valid.' });

    req.user = user; // Simpan informasi user dalam request
    next(); // Lanjutkan ke rute berikutnya
  });
};

// Fungsi untuk meng-hash password
exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  // Fungsi untuk membuat JWT token
exports.generateToken = (user) => {
    return jwt.sign(
      { id: user._id, email: user.email }, // Payload token
      JWT_SECRET, // Secret key
      { expiresIn: '1h' } // Token expire dalam 1 jam
    );
  };
