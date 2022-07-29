import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export {ProfileService} from './services/profile.service';
export {Profile} from './models/profile';

@NgModule({
  imports: [CommonModule],
})
export class SharedDataModule {}
