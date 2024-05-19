import { Schema, model } from 'mongoose';

const eventsSchema = new Schema({
  title: String,
  shop: String,
  favorite: Boolean,
});

const Events = model('events', eventsSchema);

export default Events;
