import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CampaignComponent } from './campaign/campaign.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FounderComponent } from './founder/founder.component';
import { MediaCuttingsComponent } from './media-cuttings/media-cuttings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminDash', component: AdminDashboardComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'objective', component: AboutUsComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'founder', component: FounderComponent },
  { path: 'media', component: MediaCuttingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
