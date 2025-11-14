import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { HelloRemoteComponent } from '../components/hello-remote/hello-remote.component';
import { ContentRemoteComponent } from '../components/content-remote/content-remote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloRemoteComponent, ContentRemoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private _nome: string = '---';
  @Input() set nome(value: string) {
    this._nome = value;
  }
  get nome() { return this._nome; }

  contador = 0;
  @Output() valorChange = new EventEmitter<number>();

  incrementar() {
    this.contador++;
    this.valorChange.emit(this.contador);
  }
}
