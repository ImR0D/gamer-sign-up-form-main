import { Component, inject } from '@angular/core';
import { GamerSignupService } from '../../services/gamer-signup.service';

@Component({
  selector: 'app-operator-table',
  imports: [],
  templateUrl: './operator-table.component.html',
  styleUrl: './operator-table.component.scss',
})
export class OperatorTableComponent {
  SignUpService = inject(GamerSignupService);
}
