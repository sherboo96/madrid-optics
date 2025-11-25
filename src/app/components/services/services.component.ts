import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

interface Service {
  icon: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  currentLang: Language = 'ar';
  services: Service[] = [
    {
      icon: '👓',
      titleEn: 'Prescription Glasses',
      titleAr: 'نظارات طبية',
      descEn: 'High-quality prescription glasses tailored to your vision needs with modern frame designs.',
      descAr: 'نظارات طبية عالية الجودة مصممة خصيصاً لاحتياجاتك البصرية مع أحدث تصاميم الإطارات.'
    },
    {
      icon: '😎',
      titleEn: 'Sunglasses',
      titleAr: 'نظارات شمسية',
      descEn: 'Stylish sunglasses with UV protection to keep your eyes safe and fashionable.',
      descAr: 'نظارات شمسية أنيقة مع حماية من الأشعة فوق البنفسجية لحماية عينيك مع الحفاظ على الأناقة.'
    },
    {
      icon: '🔍',
      titleEn: 'Contact Lenses',
      titleAr: 'عدسات لاصقة',
      descEn: 'Comfortable contact lenses in various types for daily and extended wear.',
      descAr: 'عدسات لاصقة مريحة بأنواع مختلفة للاستخدام اليومي والاستخدام الممتد.'
    },
    {
      icon: '👁️',
      titleEn: 'Eye Testing',
      titleAr: 'قياس نظر',
      descEn: 'Professional eye examinations using advanced equipment for accurate prescriptions.',
      descAr: 'فحوصات عينية احترافية باستخدام أحدث الأجهزة للحصول على وصفات طبية دقيقة.'
    }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  onServiceClick(): void {
    const element = document.getElementById('contact');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }
}

