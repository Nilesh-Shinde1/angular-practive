import { Component } from '@angular/core';
import { onFavoriteArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title : "Title",
    isFavorite : true
  }

  onFavClicked(isFav: onFavoriteArgs){
    console.log("isFavClicked :: ", isFav);
  }
}
