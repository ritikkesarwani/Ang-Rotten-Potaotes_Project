import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router){}

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:3000/trending-movies').subscribe((movies) => {
    this.trendingMovies = movies;
    console.log(this.trendingMovies)
    });
  }

  getTheatreMovies(){
    this.http.get('http://localhost:3000/theatre-movies').subscribe((movies)=> {
      this.theatreMovies = movies;
      console.log(this.theatreMovies)
    })
  }

  getPopularMovies(){
    this.http.get('http://localhost:3000/popular-movies.json').subscribe((movies)=> {
      this.popularMovies = movies;
      console.log(this.trendingMovies)
    })
  }


  goToMovie(type:string, id:string){
    this.router.navigate(['movie', type, id])
  }

}
