import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private http: HttpClient
  ) { }
  
  triggerApiCall = () => {
    for (let j = 0, j_len = 10; j < j_len; j++) {
      for (let i = 1, i_len = 100; i < i_len; i++) {
        this.http.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
          .subscribe(post => console.log(post))
      }  
    }
  };

}
