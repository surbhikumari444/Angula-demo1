import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { LogInComponent } from 'src/app/modules/log-in/log-in.component';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from 'src/app/modules/sign-up/sign-up.component';
import { ForgetPassComponent } from 'src/app/modules/forget-pass/forget-pass.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from  '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [PhotoComponent,
  LogInComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ]
})
export class PhotoModule { }
