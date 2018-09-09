import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-liste',
  templateUrl: './post-liste.component.html',
  styleUrls: ['./post-liste.component.css']
})
export class PostListeComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onUp(){
    // fonction augmentant les loveIts
    this.post.loveIts += 1;
  }

  onDown(){
    // fonction diminuant les loveIts
    this.post.loveIts -= 1;
  }

}

// Class définissant un post
export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}
