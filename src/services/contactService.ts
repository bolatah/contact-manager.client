import { Contact } from "../models/contact";
require("dotenv").config();

const apiBaseUrl = `${process.env.REACT_APP_API}/contacts`;

const headerOptions = {
  "Content-type": "application/json",
  Accept: "application/json",
  "access-token": `${localStorage.getItem("access-token")}`,
  "refresh-token": `${localStorage.getItem("refresh-token")}`,
};

export class ContactService {
  saveContact = async (contact) => {
    return await fetch(apiBaseUrl, {
      method: "POST",
      credentials: "include",
      headers: headerOptions,
      body: JSON.stringify(contact),
    });
  };

  updateContact = async (id: number, contact: Contact): Promise<Response> => {
    return await fetch(apiBaseUrl + "/" + id, {
      method: "PUT",
      credentials: "include",
      headers: headerOptions,
      body: JSON.stringify(contact),
    });
  };

  getContactList = async (): Promise<Response> => {
    return await fetch(apiBaseUrl, {
      credentials: "include",
      headers: headerOptions,
    });
  };

  getContactById = async (id: number): Promise<Contact> => {
    return {} as Contact;
  };

  deleteContactById = async (id: number): Promise<Response> => {
    return await fetch(apiBaseUrl + "/" + id, {
      method: "DELETE",
      credentials: "include",
      headers: headerOptions,
    });
  };
}
