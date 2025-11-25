import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  currentLang: Language = 'ar';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Get initial value immediately
    this.currentLang = this.languageService.getCurrentLang();
    
    // Subscribe to changes
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }
}

