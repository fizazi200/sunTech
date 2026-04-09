export interface Facture {
  id: number;
  nom: string;
  date: string;
  montant: number;
  statut: 'SCANNEE' | 'IMPORTEE' | 'TRAITEE_AI';
}
