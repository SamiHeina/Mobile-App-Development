import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { RouterModule, Routes } from '@angular/router';
=======
import { Routes, RouterModule } from '@angular/router';

>>>>>>> Stashed changes
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
<<<<<<< Updated upstream
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
     
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
=======
    path: '',
    component: TabsPage
>>>>>>> Stashed changes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
<<<<<<< Updated upstream
=======
  exports: [RouterModule],
>>>>>>> Stashed changes
})
export class TabsPageRoutingModule {}
