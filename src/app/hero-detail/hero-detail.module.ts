import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroDetailPageRoutingModule } from './hero-detail-routing.module';

import { HeroDetailPage } from './hero-detail.page';
import { IonHeaderComponent } from '../ion-header/ion-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroDetailPageRoutingModule
  ],
  declarations: [HeroDetailPage, IonHeaderComponent]
})
export class HeroDetailPageModule {}
