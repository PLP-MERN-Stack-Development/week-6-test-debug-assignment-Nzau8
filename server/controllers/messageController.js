const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  try {
    const { room } = req.params;
    const messages = await Message.find({ room }).sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get messages' });
  }
}; 