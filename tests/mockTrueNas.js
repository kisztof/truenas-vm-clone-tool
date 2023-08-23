const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/v2.0/auth/login', (req, res) => {
  res.header('x-auth-token', 'mock-token');
  res.send({ success: true });
});

app.post('/api/v2.0/vm/:template_vm_id/clone/', (req, res) => {
  res.send({ status: 200 });
});

app.post('/api/v2.0/auth/logout', (req, res) => {
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Mock TrueNAS server listening at http://localhost:${port}`);
});
