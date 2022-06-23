import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { FeedsComponent } from './feeds/feeds.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent, FeedsComponent, CreatePostComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarComponent],
})
export class HomeModule {}
