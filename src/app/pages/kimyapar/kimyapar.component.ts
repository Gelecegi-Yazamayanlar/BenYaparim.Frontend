import { Component } from '@angular/core';
import { KimYaparListComponent } from '../../components/kim-yapar-list/kim-yapar-list.component';

@Component({
  selector: 'app-kimyapar',
  standalone: true,
  imports: [KimYaparListComponent],
  templateUrl: './kimyapar.component.html',
  styleUrl: './kimyapar.component.css',
})
export class KimyaparComponent {}
