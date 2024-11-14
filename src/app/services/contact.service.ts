import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+442071838750' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '14155552671' },
  ];

  constructor() {}

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find(c => c.id === id);
    return of(contact);
  }

  addContact(contact: Contact): void {
    this.contacts.push({ ...contact, id: this.contacts.length + 1 });
  }

  updateContact(contact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index > -1) {
      this.contacts[index] = contact;
    }
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}