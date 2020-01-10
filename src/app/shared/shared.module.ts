/** Angular Imports */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/** Custom Components */
import { FormfieldComponent } from './form-dialog/formfield/formfield.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { ShellComponent } from './shell/shell.component';
import { SidenavComponent } from './shell/sidenav/sidenav.component';
import { ToolbarComponent } from './shell/toolbar/toolbar.component';
import { BreadcrumbComponent } from './shell/breadcrumb/breadcrumb.component';
import { ContentComponent } from './shell/content/content.component';

/** Custom Modules */
import { IconsModule } from './icons.module';
import { MaterialModule } from './material.module';

/**
 * Shared Module
 *
 * Modules and components that are shared throughout the application should be here.
 */
@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FormfieldComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    FileUploadComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ThemePickerComponent,
    ShellComponent,
    SidenavComponent,
    ToolbarComponent,
    BreadcrumbComponent,
    ContentComponent
  ],
  exports: [
    FileUploadComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ThemePickerComponent,
    CommonModule,
    IconsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    FormDialogComponent,
    DeleteDialogComponent
  ]
})
export class SharedModule { }
