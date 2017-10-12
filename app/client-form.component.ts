import { Component }  from '@angular/core';
import { User }       from './user'; 

@Component({
  selector: 'client-form',
  templateUrl: 'app/client-form.html',
  styles: [`
    .ng-valid { border-color: green; }
    .ng-invalid { border-color: red; }    
  `]
})
export class ClientFormComponent {
  private roles = ['Administrateur', 'Editeur', 'Rédacteur', 'Utilisateur'];
  private user = new User('Martin', this.roles[1]);
  onSubmit(): void {
    console.log(this.user); 
  }
}