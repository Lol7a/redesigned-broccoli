import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    SharedModule,
    AuthModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListComponent,
        children: [{ path: 'edit', component: ShoppingEditComponent }],
      },
    ]),
  ],
  // providers: [LoggingService],
})
export class ShoppingListModule {}
