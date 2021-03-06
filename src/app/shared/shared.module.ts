import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsbarComponent } from './settingsbar/settingsbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidebarComponent, SettingsbarComponent, FooterComponent],
  declarations: [HeaderComponent, SidebarComponent, SettingsbarComponent, FooterComponent]
})
export class SharedModule { }
