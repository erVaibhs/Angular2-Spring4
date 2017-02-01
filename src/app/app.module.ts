import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { VideoService} from './video.service';
import { VideoListComponent} from './videoList.component';
import { VideoPlayerComponent} from './videoPlayer.compoenent';

@NgModule({
  declarations: [
    AppComponent, VideoListComponent, VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
