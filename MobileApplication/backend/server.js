const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact.routes');
const productRoutes = require('./routes/products.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);
app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
