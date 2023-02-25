import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from './post-form/post-form.component';
import { CreatePostRoutingModule } from './create-post-routing.module';



@NgModule({
  declarations: [
    PostFormComponent
  ],
  imports: [
    CommonModule,
    CreatePostRoutingModule
  ]
})
export class CreatePostModule { }
