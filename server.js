import { connect, Schema, model } from 'mongoose';
import './configs/loadEnv.js';
import app from './app.js';

const DB = process.env.DATABASE;

connect(DB).then(() => console.log('DB connection succesfull!'));

const tourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    uniqe: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: String,
    required: [true, 'A tour must have a prise'],
  },
});
const Tour = model('Tour', tourSchema);

const testTour = new Tour({
  name: 'Going to Iran',
  rating: 4.8,
  price: 890,
});

testTour
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('ERROR *: ', err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
