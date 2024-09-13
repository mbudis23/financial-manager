const Account = require("../models/account");
const User = require("../models/user");

// CREATE ACCOUNT (POST) - Membuat akun bank baru
exports.createAccount = async (req, res) => {
  const { name, balance } = req.body;
  const user_id = req.user.id; // Mengambil ID user dari token (jika menggunakan autentikasi)

  if (!name || balance == null) {
    return res.status(400).json({ message: "Name dan balance wajib diisi." });
  }

  try {
    // Cek jika user yang disebutkan ada
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan." });
    }

    // Buat akun baru
    const newAccount = new Account({
      user_id,
      name,
      balance,
    });

    // Simpan akun ke database
    const savedAccount = await newAccount.save();

    // Kirim respons sukses
    return res.status(201).json({
      message: "Akun bank berhasil dibuat.",
      account: savedAccount,
    });
  } catch (error) {
    console.error("Error saat membuat akun:", error);
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan server.", error });
  }
};

// UPDATE ACCOUNT (PUT) - Memperbarui akun bank
exports.updateAccount = async (req, res) => {
  const { id } = req.params; // Ambil ID akun dari URL
  const { name, balance } = req.body;

  if (!name && balance == null) {
    return res
      .status(400)
      .json({ message: "Tidak ada data untuk diperbarui." });
  }

  try {
    // Temukan akun berdasarkan ID
    const account = await Account.findById(id);
    if (!account) {
      return res.status(404).json({ message: "Akun tidak ditemukan." });
    }

    // Update informasi akun jika tersedia
    if (name) account.name = name;
    if (balance != null) account.balance = balance;

    // Simpan perubahan ke database
    const updatedAccount = await account.save();

    // Kirim respons sukses
    return res.status(200).json({
      message: "Akun bank berhasil diperbarui.",
      account: updatedAccount,
    });
  } catch (error) {
    console.error("Error saat memperbarui akun:", error);
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan server.", error });
  }
};

// DELETE ACCOUNT (DELETE) - Menghapus akun bank
exports.deleteAccount = async (req, res) => {
  const { id } = req.params; // Ambil ID akun dari URL

  try {
    // Temukan akun berdasarkan ID
    const account = await Account.findById(id);
    if (!account) {
      return res.status(404).json({ message: "Akun tidak ditemukan." });
    }

    // Hapus akun dari database
    await account.remove();

    // Kirim respons sukses
    return res.status(200).json({ message: "Akun bank berhasil dihapus." });
  } catch (error) {
    console.error("Error saat menghapus akun:", error);
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan server.", error });
  }
};

// GET ACCOUNT (GET) - Mengambil informasi akun bank berdasarkan ID
exports.getAccount = async (req, res) => {
    const { id } = req.params; // Ambil ID akun dari URL
  
    try {
      // Temukan akun berdasarkan ID
      const account = await Account.findById(id).populate('user_id', 'name email'); // Mengambil info user terkait
      if (!account) {
        return res.status(404).json({ message: 'Akun tidak ditemukan.' });
      }
  
      // Kirim respons dengan data akun
      return res.status(200).json({
        message: 'Informasi akun berhasil diambil.',
        account
      });
    } catch (error) {
      console.error('Error saat mengambil akun:', error);
      return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
    }
  };
  
  // GET ALL ACCOUNTS (GET) - Mengambil semua akun bank
  exports.getAllAccounts = async (req, res) => {
    try {
      // Temukan semua akun
      const accounts = await Account.find().populate('user_id', 'name email'); // Mengambil info user terkait
  
      // Kirim respons dengan daftar akun
      return res.status(200).json({
        message: 'Daftar akun berhasil diambil.',
        accounts
      });
    } catch (error) {
      console.error('Error saat mengambil daftar akun:', error);
      return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
    }
  };