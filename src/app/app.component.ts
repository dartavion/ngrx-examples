import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers, loadUsersSuccess } from './user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-actions';
  constructor(private store: Store<any>) {}

  loadUsers() {
    this.store.dispatch(loadUsers());
  }

  fireNestedAction() {
    this.store.dispatch(loadUsersSuccess({data: 'hello'}));
  }
}
