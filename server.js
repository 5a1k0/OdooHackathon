const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Example endpoint to receive image URL
app.post('/api/profile/image', (req, res) => {
  const { imageUrl } = req.body;
  console.log('Received image URL:', imageUrl);
  // Process or store image URL as needed
  res.json({ message: 'Image URL received successfully!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
