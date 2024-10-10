import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './components/02directives/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './components/02directives/structural-directive/structural-directive.component';
import { IfIfelseElseifComponent } from './components/03ControlFlow/if-ifelse-elseif/if-ifelse-elseif.component';
import { ForSwithchComponent } from './components/03ControlFlow/for-swithch/for-swithch.component';
import { DefaultPipesComponent } from './components/04pipe/default-pipes/default-pipes.component';
import { LifeCycleEventsComponent } from './components/09ComponenetLifecycle/life-cycle-events/life-cycle-events.component';
import { NgTemplateDirectiveComponent } from './components/02directives/ng-template-directive/ng-template-directive.component';
import { AdminLoginComponent } from './components/10Login/admin-login/admin-login.component';
import { LayoutComponent } from './components/layout/layout.component';

//for admin application
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-login',
    pathMatch: 'full',
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'atb-dir',
        component: AttributeDirectiveComponent,
      },
      {
        path: 'str-dir',
        component: StructuralDirectiveComponent,
      },
      {
        path: 'controlflow-ifelse',
        component: IfIfelseElseifComponent,
      },
      {
        path: 'for-swithch',
        component: ForSwithchComponent,
      },
      {
        path: 'default-pipe',
        component: DefaultPipesComponent,
      },
      {
        path: 'component-lifecycle',
        component: LifeCycleEventsComponent,
      },
      {
        path: 'ng-temp-dir',
        component: NgTemplateDirectiveComponent,
      },
    ],
  },
];

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'admin-login',
//     pathMatch: 'full',
//   },
//   {
//     path: 'admin-login',
//     component: AdminLoginComponent,
//   },
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [],
//   },{
//         path: 'atb-dir',
//         component: AttributeDirectiveComponent,
//       },
//       {
//         path: 'str-dir',
//         component: StructuralDirectiveComponent,
//       },
//       {
//         path: 'controlflow-ifelse',
//         component: IfIfelseElseifComponent,
//       },
//       {
//         path: 'for-swithch',
//         component: ForSwithchComponent,
//       },
//       {
//         path: 'default-pipe',
//         component: DefaultPipesComponent,
//       },
//       {
//         path: 'component-lifecycle',
//         component: LifeCycleEventsComponent,
//       },
//       {
//         path: 'ng-temp-dir',
//         component: NgTemplateDirectiveComponent,
//       },
// ];
