import {Component} from '@angular/core';
import {Post} from './post-liste/post-liste.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OC-Blog';
  // on créer un tableau d'objet Post
  posts = [new Post('post1', 'premier post'),
    new Post('pos2t', 'deuxième post'),
    new Post('post3', 'troisième post')];
}


