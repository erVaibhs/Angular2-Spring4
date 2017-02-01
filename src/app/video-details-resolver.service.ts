import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Video } from './video';
import { VideoService} from './video.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class VideoDetailsResolver implements Resolve<Video[]>{
    video: Video;
    constructor(private videoService: VideoService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Video[]>{
           // console.log("resolver called")
            let id = route.params['id'];
           
            console.log(id);
         return this.videoService.getAll();
            //return this.video;


    }
}
