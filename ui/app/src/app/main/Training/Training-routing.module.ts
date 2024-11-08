import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingHomeComponent } from './home/Training-home.component';
import { TrainingNewComponent } from './new/Training-new.component';
import { TrainingDetailComponent } from './detail/Training-detail.component';

const routes: Routes = [
  {path: '', component: TrainingHomeComponent},
  { path: 'new', component: TrainingNewComponent },
  { path: ':id', component: TrainingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Training-detail-permissions'
      }
    }
  },{
    path: ':training_id/EmployeeTraining', loadChildren: () => import('../EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTraining-detail-permissions'
        }
    }
}
];

export const TRAINING_MODULE_DECLARATIONS = [
    TrainingHomeComponent,
    TrainingNewComponent,
    TrainingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }