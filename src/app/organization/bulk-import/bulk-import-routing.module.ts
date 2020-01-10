/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../../core/route/route.service';

/** Translation Imports */
import { extract } from '../../core/i18n/i18n.service';

/** Custom Components */
import { BulkImportComponent } from './bulk-import.component';

/** Bulk Import Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'bulk-import',
      data: { title: extract('Bulk Import'), breadcrumb: 'Bulk Import' },
      children: [
        {
          path: '',
          component: BulkImportComponent
        },
      ]
    }
  ])
];

/**
 * Bulk Import Routing Module
 *
 * Configures the bulk import routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class BulkImportRoutingModule { }
