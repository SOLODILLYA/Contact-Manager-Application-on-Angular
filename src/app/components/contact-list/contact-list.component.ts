import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  standalone: true,
  styleUrls: ['./contact-list.component.css'],
  imports: [CommonModule],
})
export class ContactListComponent {
  contacts: Contact[] = [];

  @Output() editContact = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
    this.ngOnInit();
  }

  onEditContact(contact: Contact): void {
    this.editContact.emit(contact);
  }
}
