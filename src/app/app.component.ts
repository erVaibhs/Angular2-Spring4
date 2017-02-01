import { Component } from '@angular/core';
import { VideoService} from './video.service';
@Component({
  selector: 'app-root',
   template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [VideoService]
})
export class AppComponent {
  title = 'app works!';
}
