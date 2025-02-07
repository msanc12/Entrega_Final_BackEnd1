const express = require('express');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/carts');

const app = express();
connectDB();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});