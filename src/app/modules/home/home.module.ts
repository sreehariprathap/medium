import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { FeedsComponent } from './feeds/feeds.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { TrendingComponent } from 'src/app/components/trending/trending.component';
import { DiscoverComponent } from 'src/app/components/discover/discover.component';
import { PostComponent } from 'src/app/components/post/post.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    FeedsComponent,
    CreatePostComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent,
    TrendingComponent,
    DiscoverComponent,
    PostComponent,

  ],
})
export class HomeModule {}
