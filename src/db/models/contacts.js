import { model, Schema } from 'mongoose';

export const contactSchema = new Schema(
  {
    name: { type: String, required: true },

    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavorite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsColleection = model('Contact', contactSchema);
