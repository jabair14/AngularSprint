import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSprint';
  public data:any = []
  array = this.data
 constructor(private http: HttpClient) {
   
}


getData(){
  const url ='https://breakingbadapi.com/api/characters'
  this.http.get(url).subscribe((res)=>{
    this.data = res
   console.log(this.data)

  })
  
}
}
