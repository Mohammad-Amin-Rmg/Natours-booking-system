import { connect } from 'mongoose';
import './configs/loadEnv.js';
import app from './app.js';

const DB = process.env.DATABASE;

connect(DB).then(() => console.log('DB connection succesfull!'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
