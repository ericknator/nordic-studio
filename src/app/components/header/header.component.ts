import { Component, Renderer2, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, CommonModule]
})
export class HeaderComponent implements OnInit {
  isDarkTheme = true;
  isMenuOpen = false;
  isMobileView = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.checkMobileView();
    window.addEventListener('resize', () => this.checkMobileView());
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      this.renderer.removeClass(document.body, 'light-theme');
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  checkMobileView(): void {
    this.isMobileView = window.innerWidth < 992;
    if (!this.isMobileView) {
      this.isMenuOpen = true;
    }
  }
}
