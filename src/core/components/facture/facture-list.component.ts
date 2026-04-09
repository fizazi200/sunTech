import { Component } from '@angular/core';
import { Facture } from './facture.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facture-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facture-list.component.html'
})
export class FactureListComponent {

  factures = [
    { nom: 'EDF', date: '2026-03-01', montant: 120, statut: 'SCANNEE' },
    { nom: 'Amazon', date: '2026-03-02', montant: 80, statut: 'IMPORTEE' },
    { nom: 'Orange', date: '2026-03-03', montant: 60, statut: 'TRAITEE_AI' }
  ];

  getClass(status: string) {
    switch (status) {
      case 'SCANNEE':
        return 'bg-yellow-100 text-yellow-700';
      case 'IMPORTEE':
        return 'bg-blue-100 text-blue-700';
      case 'TRAITEE_AI':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  }

  downloadFacture(facture: any) {
    console.log('Download:', facture);
  }
}
