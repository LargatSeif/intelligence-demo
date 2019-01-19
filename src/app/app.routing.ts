import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { BuilderComponent } from "./pages/builder/builder.component";

const appRoutes: Routes = [
    //no layout routes
    // {
    //     path: '',
    //     component: NoNavLayoutComponent, children: [
    //         {
    //             path: '', component: LoginComponent, pathMatch: 'full'
    //         },
    //         {
    //             path: 'register', component: RegisterComponent
    //         },
    //         {
    //             path: 'forgot-password', component: ForgotPasswordComponent
    //         }
    //     ]
    // },

    // App routes goes here here
    // {
    //     path: '', component: FixedNavLayoutComponent, canActivate: [AuthGuard], children: [
    //         {
    //             path: 'dashboard', component: HomeComponent
    //         },
    //         {
    //             path: 'projects', component: FoldersPageComponent
    //         },
    //         {
    //             path: 'projects/:folder_id', component: TasksPageComponent,
    //         },
    //         {
    //             path: 'projects/:folder_id/tasks/:task_id', component: TaskDetailComponent
    //         },
    //         {
    //             path: 'events', component: EventsPageComponent,
    //         },
    //         {
    //             path: 'actions', component: ActionsComponent
    //         },
    //         {
    //             path: 'contacts', component: ContactsComponent
    //         }
    //     ]
    // },
    {
        path: '', component: BuilderComponent,
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

