import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
    { path: '', component: PostFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreatePostRoutingModule { }