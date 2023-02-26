import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  formData = {
    ts_title: '',
    ts_text: '',
    ts_category: ''
  };

  // onSubmit() {
  //   console.log(this.formData);
  //   // Add your code to submit the form data to the server here
  // }

  ngOnInit(): void {
  }

  createPost() {
    this.postService.createPost(this.formData).subscribe(
      (data: any) => {
        console.log("Operation was successful with return values as ", data);
      }
    );
  }

}
