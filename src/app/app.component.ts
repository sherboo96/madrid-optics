import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet></router-outlet>
    <button 
      class="back-to-top" 
      [class.visible]="showBackToTop"
      (click)="scrollToTop()"
      [attr.aria-label]="'Back to top'">
      ↑
    </button>
    <div class="scroll-progress" [style.width.%]="scrollProgress"></div>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #2C7A9E, #6BB6C7);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: 0 4px 15px rgba(44, 122, 158, 0.4);
      transition: all 0.3s ease;
      z-index: 999;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .back-to-top.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .back-to-top:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(44, 122, 158, 0.6);
    }
    
    [dir="rtl"] .back-to-top {
      right: auto;
      left: 30px;
    }
    
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(90deg, #2C7A9E, #6BB6C7);
      z-index: 10000;
      transition: width 0.1s ease;
    }
  `]
})
export class AppComponent implements OnInit {
  showBackToTop = false;
  scrollProgress = 0;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll(): void {
    const scrollY = window.pageYOffset;
    this.showBackToTop = scrollY > 300;
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollY / windowHeight) * 100;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

