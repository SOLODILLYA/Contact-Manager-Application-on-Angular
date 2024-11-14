import { Component, EventEmitter, Output, Input} from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ContactFormComponent {
  @Input() contact: Contact = { id: 0, name: '', email: '', phone: '' }; 
  @Output() contactSaved = new EventEmitter<void>();

  constructor(private contactService: ContactService) {}

  saveContact(): void {
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }
    this.contactSaved.emit();
    this.clearForm();
  }

  clearForm(): void {
    this.contact = { id: 0, name: '', email: '', phone: '' };
  }

  loadContact(contact: Contact): void {
    this.contact = { ...contact };
  }
}

