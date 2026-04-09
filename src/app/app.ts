import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DocumentCard} from './features/dashboard/components/document-card/document-card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DocumentCard, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('camunda-doc-gen');
}
