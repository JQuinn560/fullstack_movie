import { Component } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
 
  movies_list = [
    {
      "name" : "Star Wars",
      "genre": "ScFi",
      "review_count": 10
    },
    {
      "name" : "Star a",
      "genre": "ScFi",
      "review_count": 10
    },
    {
      "name" : "chicken",
      "genre": "asd",
      "review_count": 10
    },
    {
      "name" : "yellow",
      "genre": "ScFi",
      "review_count": 10
    }
  ]


}
