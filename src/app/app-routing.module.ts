import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "",
    redirectTo: "./pages/login",
    pathMatch: "full",
  },

  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin/admin.module").then((m) => m.AdminPageModule),
  },
  {
    path: "activities",
    loadChildren: () =>
      import("./pages/activities/activities.module").then(
        (m) => m.ActivitiesPageModule
      ),
  },
  {
    path: "equipement",
    loadChildren: () =>
      import("./pages/equipement/equipement.module").then(
        (m) => m.EquipementPageModule
      ),
  },
  {
    path: "employee",
    loadChildren: () =>
      import("./pages/employee/employee.module").then(
        (m) => m.EmployeePageModule
      ),
  },
  {
    path: "inventory",
    loadChildren: () =>
      import("./pages/inventory/inventory.module").then(
        (m) => m.InventoryPageModule
      ),
  },
  {
    path: 'created-activitie',
    loadChildren: () => import('./pages/created-activitie/created-activitie.module').then( m => m.CreatedActivitiePageModule)
  },
  {
    path: 'instruction',
    loadChildren: () => import('./modal/instruction/instruction.module').then( m => m.InstructionPageModule)
  },
  {
    path: 'add-activie-modal',
    loadChildren: () => import('./modal/add-activie-modal/add-activie-modal.module').then( m => m.AddActivieModalPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'admin-valide-activities',
    loadChildren: () => import('./pages/admin-valide-activities/admin-valide-activities.module').then( m => m.AdminValideActivitiesPageModule)
  },
  {
    path: 'achats',
    loadChildren: () => import('./pages/achats/achats.module').then( m => m.AchatsPageModule)
  },
  {
    path: 'salaire',
    loadChildren: () => import('./pages/salaire/salaire.module').then( m => m.SalairePageModule)
  },
  {
    path: 'display-user',
    loadChildren: () => import('./pages/display-user/display-user.module').then( m => m.DisplayUserPageModule)
  },
  {
    path: 'paie-user',
    loadChildren: () => import('./pages/paie-user/paie-user.module').then( m => m.PaieUserPageModule)
  },
  {
    path: 'display-image',
    loadChildren: () => import('./pages/display-image/display-image.module').then( m => m.DisplayImagePageModule)
  },
  {
    path: 'add-activitie-name',
    loadChildren: () => import('./pages/add-activitie-name/add-activitie-name.module').then( m => m.AddActivitieNamePageModule)
  },
  {
    path: 'manager-inventory',
    loadChildren: () => import('./pages/manager-inventory/manager-inventory.module').then( m => m.ManagerInventoryPageModule)
  },
  {
    path: 'view-inventaire',
    loadChildren: () => import('./modal/view-inventaire/view-inventaire.module').then( m => m.ViewInventairePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
