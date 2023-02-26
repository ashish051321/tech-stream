import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  formData = {
    title: '',
    post: '',
    category: ''
  };

  onSubmit() {
    console.log(this.formData);
    // Add your code to submit the form data to the server here
  }

  ngOnInit(): void {
  }

}
