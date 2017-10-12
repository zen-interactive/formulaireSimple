import { Component } from '@angular/core';
import { ClientFormComponent } from './client-form.component';

@Component({
	selector: 'form-test',
	template: '<client-form></client-form>',
	directives: [ClientFormComponent]
})
export class AppComponent { }