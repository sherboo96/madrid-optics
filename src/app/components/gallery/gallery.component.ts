import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

interface GalleryItem {
  textEn: string;
  textAr: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  currentLang: Language = 'ar';
  items: GalleryItem[] = [
    { textEn: 'Shop Interior', textAr: 'داخل المتجر' },
    { textEn: 'Frames Collection', textAr: 'مجموعة الإطارات' },
    { textEn: 'Sunglasses', textAr: 'نظارات شمسية' },
    { textEn: 'Eye Testing Room', textAr: 'غرفة فحص النظر' },
    { textEn: 'Modern Frames', textAr: 'إطارات عصرية' },
    { textEn: 'Contact Lenses', textAr: 'عدسات لاصقة' }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
}

