<<<<<<< Updated upstream
import { IonicModule } from '@ionic/angular';
=======
>>>>>>> Stashed changes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

<<<<<<< Updated upstream
=======
import { IonicModule } from '@ionic/angular';

>>>>>>> Stashed changes
import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
<<<<<<< Updated upstream
    IonicModule,
    CommonModule,
    FormsModule,
=======
    CommonModule,
    FormsModule,
    IonicModule,
>>>>>>> Stashed changes
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
