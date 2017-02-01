import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Video } from './video';
import { Images } from './images';
import { Content } from './content';
@Injectable()
export class VideoService{

    private baseUrl: string = 'http://localhost:8080/videoProduct/product/';
    //private baseUrl: string = 'https://demo2697834.mockable.io/movies';
     constructor(private http : Http){
  }

  getAll(): Observable<Video[]>{
      
    let video$ = this.http
      .get(this.baseUrl+'videos')
      .map(mapVideos)
      .catch(handleError);

     // console.log(video$[0].id);
      return video$;
  }

   getVideo(id: string): Observable<Video[]>{
      
    let video$ = this.http
      .get(this.baseUrl+'video/'+id,{headers : this.getHeaders()})
      .map(mapVideos)
     
      .catch(handleError);
      //video$.find(video => video.id === +id);
      console.log(video$);
     //console.log(video$.find(video => video.id === +id));
      return video$;
  }
private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

 private getHeaders(){
     
    let headers = new Headers();
    headers.append('Accept', 'application/json');
       
    return headers;
  }

}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our  device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
  function mapVideos(response:Response): Video[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().map(toVideos)
}

function toVideos(r:any): Video{
  let video = <Video>({
    id: r.id,
    title: r.title,
    image: toImages(r.images[0]),
    content: toContent(r.contents[0])

  });
  //console.log('Parsed videos:', r);
  return video;
}

function toImages(i:any): Images{

  //console.log(i);
  let image = <Images>({
      id: i.id,
      url: i.url

  }); 
//console.log(image);
  return image;
}

function toContent(i:any): Content{

  //console.log(i);
  let content = <Content>({
      id: i.id,
      url: i.url

  }); 
//console.log(image);
  return content;
}

function extractId(videoData:any){
  let extractedId = videoData.url.replace('https://demo2697834.mockable.io/movies','').replace('/','');
  return parseInt(extractedId);
}