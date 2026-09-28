import {Component, signal} from '@angular/core';
import {HelloApi} from '../hello-api';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {

  message = signal('Chargement...')

  constructor(private readonly api: HelloApi) {
    this.api.getHello().subscribe({
      next: (res) => this.message.set(res.message),
      error: (err) => this.message.set('Erreur : le back est-il lancé ?'),
    })
  }
}
