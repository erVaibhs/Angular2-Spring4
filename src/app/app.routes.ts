import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';
import { VideoListComponent } from './videoList.component';
import { VideoPlayerComponent} from './videoPlayer.compoenent'; 
import { VideoDetailsResolver } from './video-details-resolver.service';
// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'videos',
    component: VideoListComponent,
  },
  // map '/' to '/persons' as our default route

  {
    path: 'videosPlayer/:id',
    component: VideoPlayerComponent
  
  },
  {
    path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  },
];


export const routing = RouterModule.forRoot(routes);
