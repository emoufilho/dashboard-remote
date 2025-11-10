import { Component } from '@angular/core';
import { HelloRemoteComponent } from '../components/hello-remote/hello-remote.component';
import { ContentRemoteComponent } from '../components/content-remote/content-remote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloRemoteComponent, ContentRemoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
