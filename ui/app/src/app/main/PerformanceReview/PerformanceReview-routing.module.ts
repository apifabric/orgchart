import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceReviewHomeComponent } from './home/PerformanceReview-home.component';
import { PerformanceReviewNewComponent } from './new/PerformanceReview-new.component';
import { PerformanceReviewDetailComponent } from './detail/PerformanceReview-detail.component';

const routes: Routes = [
  {path: '', component: PerformanceReviewHomeComponent},
  { path: 'new', component: PerformanceReviewNewComponent },
  { path: ':id', component: PerformanceReviewDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PerformanceReview-detail-permissions'
      }
    }
  }
];

export const PERFORMANCEREVIEW_MODULE_DECLARATIONS = [
    PerformanceReviewHomeComponent,
    PerformanceReviewNewComponent,
    PerformanceReviewDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceReviewRoutingModule { }