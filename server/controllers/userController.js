const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { hashPassword, authenticateToken, generateToken } = require('../middlewares/userMiddleware');

// Fungsi untuk menangani registrasi user baru
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Validasi input (Anda bisa menambahkan validasi lebih detail di sini)
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Semua field wajib diisi.' });
  }

  try {
    // Cek apakah email sudah digunakan
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email telah digunakan.' });
    }

    // Hash password user dengan bcrypt
    const hashedPassword = await hashPassword(password);

    // Buat instance user baru
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Simpan user ke database
    const savedUser = await newUser.save();

    // Buat token JWT dengan data user
    const token = generateToken(savedUser);

    // Kirim respons sukses dengan token
    return res.status(201).json({
      message: 'Registrasi berhasil.',
      token,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (error) {
    // Tangani kesalahan jika terjadi
    console.error('Error saat registrasi:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
  }
};

// LOGIN (POST) - Autentikasi user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validasi input (Anda bisa menambahkan validasi lebih detail di sini)
  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password wajib diisi.' });
  }

  try {
    // Cek apakah user dengan email tersebut ada di database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email atau password salah.' });
    }

    // Periksa apakah password yang dimasukkan cocok dengan password yang ter-hash di database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email atau password salah.' });
    }

    // Jika login berhasil, buat token JWT
    const token = generateToken(user);

    // Kirim respons dengan token
    return res.status(200).json({
      message: 'Login berhasil.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    // Tangani kesalahan jika terjadi
    console.error('Error saat login:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
  }
};

// UPDATE USER (PUT) - Pembaruan informasi pengguna
exports.updateUser = async (req, res) => {
  const { id } = req.params;  // Ambil ID user dari URL
  const { name, email, password } = req.body;  // Ambil data baru dari body request

  try {
    // Temukan user berdasarkan ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User tidak ditemukan.' });
    }

    // Update informasi user jika tersedia
    if (name) user.name = name;
    if (email) user.email = email;

    // Jika password baru disediakan, hash password dan update
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Simpan perubahan ke database
    const updatedUser = await user.save();

    // Kirim respons dengan informasi user yang diperbarui
    return res.status(200).json({
      message: 'Informasi pengguna berhasil diperbarui.',
      user: { id: updatedUser._id, name: updatedUser.name, email: updatedUser.email },
    });
  } catch (error) {
    console.error('Error saat memperbarui pengguna:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
  }
};

// RESET PASSWORD (PUT) - Reset password pengguna
exports.resetPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Password lama dan password baru wajib diisi.' });
  }

  try {
    // Temukan user berdasarkan ID dari token
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User tidak ditemukan.' });
    }

    // Verifikasi password lama
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password lama salah.' });
    }

    // Hash password baru
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // Simpan perubahan ke database
    const updatedUser = await user.save();

    // Kirim respons sukses
    return res.status(200).json({
      message: 'Password berhasil di-reset.',
      user: { id: updatedUser._id, name: updatedUser.name, email: updatedUser.email },
    });
  } catch (error) {
    console.error('Error saat mereset password:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
  }
};