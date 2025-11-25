import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'ar' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject: BehaviorSubject<Language>;
  public currentLang$: Observable<Language>;

  private translations = {
    en: {
      langText: 'English',
      thankYou: 'Thank you for your message! We will contact you soon.',
      mapPlaceholder: 'Google Maps Location',
      nav: {
        about: 'About',
        services: 'Services',
        gallery: 'Gallery',
        contact: 'Contact'
      }
    },
    ar: {
      langText: 'العربية',
      thankYou: 'شكراً لرسالتك! سنتواصل معك قريباً.',
      mapPlaceholder: 'الموقع على خرائط جوجل',
      nav: {
        about: 'عننا',
        services: 'الخدمات',
        gallery: 'المعرض',
        contact: 'اتصل بنا'
      }
    }
  };

  constructor() {
    const savedLang = (localStorage.getItem('preferredLang') || 'ar') as Language;
    this.currentLangSubject = new BehaviorSubject<Language>(savedLang);
    this.currentLang$ = this.currentLangSubject.asObservable();
    this.updateDocumentDirection(savedLang);
  }

  getCurrentLang(): Language {
    return this.currentLangSubject.value;
  }

  switchLanguage(lang: Language): void {
    this.currentLangSubject.next(lang);
    localStorage.setItem('preferredLang', lang);
    this.updateDocumentDirection(lang);
  }

  toggleLanguage(): void {
    const newLang = this.getCurrentLang() === 'ar' ? 'en' : 'ar';
    this.switchLanguage(newLang);
  }

  getTranslation(key: string): string {
    const lang = this.getCurrentLang();
    const keys = key.split('.');
    let value: any = this.translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }

  private updateDocumentDirection(lang: Language): void {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }
  }
}

