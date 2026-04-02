const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/health', (req, res) => {
    res.json({ status: "UP" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
