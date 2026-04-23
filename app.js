const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(logger);
app.use('/api', userRoutes);
app.use(errorHandler);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});