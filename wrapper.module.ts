import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [ContentComponent, FooterComponent, NavComponent, HeaderComponent, WrapperComponent],
  imports: [
    CommonModule
  ],
  exports:[WrapperComponent]
})
export class WrapperModule { }
