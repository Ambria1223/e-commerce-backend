const express = require('express');
const routes = require('./routes');
const { sequelize } = require('./connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
    // Start server here
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});



