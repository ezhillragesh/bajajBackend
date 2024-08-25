const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
const customRoutes = require('./routes/customRoutes');

app.use(customRoutes);

app.listen(port, () => {
    console.log(`Server running is on the port ${port}`);
});