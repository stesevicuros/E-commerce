require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');

const app = express();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connection Successful!'))
	.catch((err) => console.error(err));

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || 3000, () => {
	console.log('Listening on port 3000 :)');
});
