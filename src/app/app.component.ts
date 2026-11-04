import { Component } from '@angular/core';
import { LogoComponent } from './shared/components/logo/logo.component';
import { BrandBannerComponent } from './components/brand-banner/brand-banner.component';
import { OperatorTableComponent } from './components/operator-table/operator-table.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@Component({
  selector: 'app-root',
  imports: [
    LogoComponent,
    BrandBannerComponent,
    OperatorTableComponent,
    SignupFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
