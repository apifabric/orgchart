import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Assignment', loadChildren: () => import('./Assignment/Assignment.module').then(m => m.AssignmentModule) },
    
        { path: 'Benefit', loadChildren: () => import('./Benefit/Benefit.module').then(m => m.BenefitModule) },
    
        { path: 'Department', loadChildren: () => import('./Department/Department.module').then(m => m.DepartmentModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'EmployeeSkill', loadChildren: () => import('./EmployeeSkill/EmployeeSkill.module').then(m => m.EmployeeSkillModule) },
    
        { path: 'EmployeeTraining', loadChildren: () => import('./EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule) },
    
        { path: 'Office', loadChildren: () => import('./Office/Office.module').then(m => m.OfficeModule) },
    
        { path: 'PerformanceReview', loadChildren: () => import('./PerformanceReview/PerformanceReview.module').then(m => m.PerformanceReviewModule) },
    
        { path: 'Position', loadChildren: () => import('./Position/Position.module').then(m => m.PositionModule) },
    
        { path: 'Project', loadChildren: () => import('./Project/Project.module').then(m => m.ProjectModule) },
    
        { path: 'Skill', loadChildren: () => import('./Skill/Skill.module').then(m => m.SkillModule) },
    
        { path: 'Training', loadChildren: () => import('./Training/Training.module').then(m => m.TrainingModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }