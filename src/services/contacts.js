import { ContactsColleection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsColleection.find({});
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsColleection.findById(contactId);
  return contact;
};
