import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 works:string="";
 title:string="ali can";
 todos:string[]=[];
 save(){
  console.log(this.works);
  this.todos.push(this.works);
  this.works="";
 }
}
