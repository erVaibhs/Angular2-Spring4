import { Component, OnInit, Directive } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Video } from './video';
import { VideoService } from './video.service';
import { VideoPlayerComponent} from './videoPlayer.compoenent';
import { Router, ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'video-list',
  templateUrl: 'videoList.component.html',
  
})
export class VideoListComponent implements OnInit{

   video: Video[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;


constructor(private videoService : VideoService,
            private route: ActivatedRoute,
            private router: Router){}

ngOnInit(){
       this.videoService
      .getAll()
      .subscribe(
         /* happy path */ v => this.video = v,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }

clicked(video, event){
   // this.route.data = video;
    this.router.navigate(["/videosPlayer", video.id]);
  //routing.ngModule(VideoPlayerComponent);
  
}

}