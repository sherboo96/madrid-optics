import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  currentLang: Language = 'ar';
  formData = {
    name: '',
    phone: '',
    message: ''
  };
  isSubmitting = false;
  showMessage = false;
  messageType: 'success' | 'error' = 'success';
  messageText = '';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  formatPhone(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 0 && !value.startsWith('965')) {
      if (value.startsWith('0')) {
        value = '965' + value.substring(1);
      } else if (!value.startsWith('965')) {
        value = '965' + value;
      }
    }
    if (value.length > 3) {
      value = value.substring(0, 3) + ' ' + value.substring(3);
    }
    if (value.length > 8) {
      value = value.substring(0, 8) + ' ' + value.substring(8, 12);
    }
    this.formData.phone = '+' + value;
  }

  onSubmit(): void {
    // Validation
    if (!this.formData.name || this.formData.name.length < 2) {
      this.showMessage = true;
      this.messageType = 'error';
      this.messageText = this.currentLang === 'ar' 
        ? 'الاسم يجب أن يكون على الأقل حرفين' 
        : 'Name must be at least 2 characters';
      return;
    }

    if (!this.formData.phone || !/^[\d\s\-\+\(\)]+$/.test(this.formData.phone)) {
      this.showMessage = true;
      this.messageType = 'error';
      this.messageText = this.currentLang === 'ar' 
        ? 'يرجى إدخال رقم هاتف صحيح' 
        : 'Please enter a valid phone number';
      return;
    }

    if (!this.formData.message || this.formData.message.length < 10) {
      this.showMessage = true;
      this.messageType = 'error';
      this.messageText = this.currentLang === 'ar' 
        ? 'الرسالة يجب أن تكون على الأقل 10 أحرف' 
        : 'Message must be at least 10 characters';
      return;
    }

    // Submit form
    this.isSubmitting = true;
    this.showMessage = false;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.showMessage = true;
      this.messageType = 'success';
      this.messageText = this.languageService.getTranslation('thankYou');
      this.formData = { name: '', phone: '', message: '' };
    }, 2000);
  }
}

