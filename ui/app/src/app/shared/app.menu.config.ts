import { MenuRootItem } from 'ontimize-web-ngx';

import { AssignmentCardComponent } from './Assignment-card/Assignment-card.component';

import { BenefitCardComponent } from './Benefit-card/Benefit-card.component';

import { DepartmentCardComponent } from './Department-card/Department-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { EmployeeSkillCardComponent } from './EmployeeSkill-card/EmployeeSkill-card.component';

import { EmployeeTrainingCardComponent } from './EmployeeTraining-card/EmployeeTraining-card.component';

import { OfficeCardComponent } from './Office-card/Office-card.component';

import { PerformanceReviewCardComponent } from './PerformanceReview-card/PerformanceReview-card.component';

import { PositionCardComponent } from './Position-card/Position-card.component';

import { ProjectCardComponent } from './Project-card/Project-card.component';

import { SkillCardComponent } from './Skill-card/Skill-card.component';

import { TrainingCardComponent } from './Training-card/Training-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Assignment', name: 'ASSIGNMENT', icon: 'view_list', route: '/main/Assignment' }
    
        ,{ id: 'Benefit', name: 'BENEFIT', icon: 'view_list', route: '/main/Benefit' }
    
        ,{ id: 'Department', name: 'DEPARTMENT', icon: 'view_list', route: '/main/Department' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'EmployeeSkill', name: 'EMPLOYEESKILL', icon: 'view_list', route: '/main/EmployeeSkill' }
    
        ,{ id: 'EmployeeTraining', name: 'EMPLOYEETRAINING', icon: 'view_list', route: '/main/EmployeeTraining' }
    
        ,{ id: 'Office', name: 'OFFICE', icon: 'view_list', route: '/main/Office' }
    
        ,{ id: 'PerformanceReview', name: 'PERFORMANCEREVIEW', icon: 'view_list', route: '/main/PerformanceReview' }
    
        ,{ id: 'Position', name: 'POSITION', icon: 'view_list', route: '/main/Position' }
    
        ,{ id: 'Project', name: 'PROJECT', icon: 'view_list', route: '/main/Project' }
    
        ,{ id: 'Skill', name: 'SKILL', icon: 'view_list', route: '/main/Skill' }
    
        ,{ id: 'Training', name: 'TRAINING', icon: 'view_list', route: '/main/Training' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AssignmentCardComponent

    ,BenefitCardComponent

    ,DepartmentCardComponent

    ,EmployeeCardComponent

    ,EmployeeSkillCardComponent

    ,EmployeeTrainingCardComponent

    ,OfficeCardComponent

    ,PerformanceReviewCardComponent

    ,PositionCardComponent

    ,ProjectCardComponent

    ,SkillCardComponent

    ,TrainingCardComponent

];