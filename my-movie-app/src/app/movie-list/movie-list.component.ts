import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormatDatePipe } from '../pipes/format-date.pipe';
import { FormatDurationPipe } from '../pipes/format-duration.pipe';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [FormatDatePipe, FormatDurationPipe]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];


  constructor(private movieService: MovieService, private formatDatePipe: FormatDatePipe) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  toggleLike(movie: any): void {
    const liked = !movie.liked;
    this.movieService.toggleLike(movie.id, liked)
      .subscribe(movie => {
        movie.liked = liked;
      });
  }
}