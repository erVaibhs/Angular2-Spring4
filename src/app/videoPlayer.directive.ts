import { Directive, ViewContainerRef } from '@angular/core';

@Directive({


    selector: '[video-player-directive]'
})

export class VideoPlayerDirective{


    constructor(private viewContainerRef: ViewContainerRef){}
}