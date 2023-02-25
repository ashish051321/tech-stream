import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

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
