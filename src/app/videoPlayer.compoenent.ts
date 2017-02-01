import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy,OnInit } from '@angular/core';

import { VideoService } from './video.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Video } from './video';

@Component({

    selector:'video-player',
    template: `
           <div *ngFor="let video of videos">
                <video width="320" height="240" controls autoplay width="100%" height="100%">
                <source src="{{video.content.url}}" type="video/mp4">
                
                Your browser does not support the video tag.
                </video>

</div>

    `

})


export class VideoPlayerComponent{
    videos: Video[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;
  param: Params;
  id:string;
  video: Video;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private videoService: VideoService  ){}


    
  ngOnInit() {
    
      // (+) converts string 'id' to a number
    //  .switchMap((params: Params) => this.videoService.getHero(+params['id']))
      //.subscribe((hero: Hero) => this.hero = hero);
      console.log( this.route.params);
      // var params = this.route.params;
      this.route.params.subscribe( i => this.param = i);
     console.log( this.param['id'] );
     this.id  = this.param['id']
      this.videoService.getVideo(this.id)             
        .subscribe(
         /* happy path */ v => this.videos = v,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
 
console.log(this.videos );
 }

 
}