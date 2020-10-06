import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminDashNavComponent } from './admin/admin-dash-nav/admin-dash-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AboutUsComponent } from './about-us/about-us.component';
import { CampaignComponent } from './campaign/campaign.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FounderComponent } from './founder/founder.component';
import { MediaCuttingsComponent } from './media-cuttings/media-cuttings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    SocialIconsComponent,
    AdminPageComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminDashNavComponent,
    AboutUsComponent,
    CampaignComponent,
    GalleryComponent,
    ImageViewerComponent,
    FounderComponent,
    MediaCuttingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    CarouselModule,
    MatDialogModule,
  ],
  entryComponents: [ImageViewerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
