import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, NgxSpinnerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

    constructor(private flowbiteService: FlowbiteService) {}
 isDarkMode = false;


  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
     
    
    });


        const dark = localStorage.getItem('darkMode');
    if (dark === 'true') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }
  title = 'fashion';


   toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    const root = document.documentElement;
    if (this.isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }


}
