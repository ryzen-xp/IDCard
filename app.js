
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname , "public")));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/owner', (req, res) => {
    res.sendFile(path.join(__dirname , 'owner.html'));
});

app.get('/manager', (req, res) => {
    res.sendFile(path.join(__dirname , 'manger.html'));
});

app.get('/deactivate', (req, res) => {
    res.sendFile(path.join(__dirname , 'deactivate.html'));
});

app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname , 'details.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
