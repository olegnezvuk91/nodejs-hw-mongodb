import { ContactsColleection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsColleection.find({});
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsColleection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsColleection.create(payload);
  return contact;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsColleection.findByIdAndDelete(contactId);
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const contact = await ContactsColleection.findByIdAndUpdate(
    contactId,
    payload,
    {
      new: true,
    },
  );
  return contact;
};
