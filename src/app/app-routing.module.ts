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
  {
    path: 'update-employe',
    loadChildren: () => import('./pages/update-employe/update-employe.module').then( m => m.UpdateEmployePageModule)
  },
  {
    path: 'list-activities',
    loadChildren: () => import('./modal/list-activities/list-activities.module').then( m => m.ListActivitiesPageModule)
  },
  {
    path: 'projet',
    loadChildren: () => import('./pages/projet/projet.module').then( m => m.ProjetPageModule)
  },
  {
    path: 'add-projet',
    loadChildren: () => import('./modal/add-projet/add-projet.module').then( m => m.AddProjetPageModule)
  },
  {
    path: 'add-travaux',
    loadChildren: () => import('./modal/add-travaux/add-travaux.module').then( m => m.AddTravauxPageModule)
  },
  {
    path: 'travaux',
    loadChildren: () => import('./pages/travaux/travaux.module').then( m => m.TravauxPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'list-created-activities',
    loadChildren: () => import('./modal/list-created-activities/list-created-activities.module').then( m => m.ListCreatedActivitiesPageModule)
  },
  {
    path: 'list-created-travaux',
    loadChildren: () => import('./modal/list-created-travaux/list-created-travaux.module').then( m => m.ListCreatedTravauxPageModule)
  },
  {
    path: 'travaux-before-save',
    loadChildren: () => import('./modal/travaux-before-save/travaux-before-save.module').then( m => m.TravauxBeforeSavePageModule)
  },
  {
    path: 'display-travaux-list',
    loadChildren: () => import('./modal/display-travaux-list/display-travaux-list.module').then( m => m.DisplayTravauxListPageModule)
  },
  {
    path: 'display-activity-list',
    loadChildren: () => import('./modal/display-activity-list/display-activity-list.module').then( m => m.DisplayActivityListPageModule)
  },
  {
    path: 'display-materiel-list',
    loadChildren: () => import('./modal/display-materiel-list/display-materiel-list.module').then( m => m.DisplayMaterielListPageModule)
  },
  {
    path: 'display-one-activity-list',
    loadChildren: () => import('./modal/display-one-activity-list/display-one-activity-list.module').then( m => m.DisplayOneActivityListPageModule)
  },
  {
    path: 'display-one-materiel-list',
    loadChildren: () => import('./modal/display-one-materiel-list/display-one-materiel-list.module').then( m => m.DisplayOneMaterielListPageModule)
  },
  {
    path: 'avance-salaire',
    loadChildren: () => import('./modal/avance-salaire/avance-salaire.module').then( m => m.AvanceSalairePageModule)
  },
  {
    path: 'select-employe',
    loadChildren: () => import('./modal/select-employe/select-employe.module').then( m => m.SelectEmployePageModule)
  },
  {
    path: 'paye-maindoeuvre',
    loadChildren: () => import('./modal/paye-maindoeuvre/paye-maindoeuvre.module').then( m => m.PayeMaindoeuvrePageModule)
  },
  {
    path: 'display-user-maindooeuvre',
    loadChildren: () => import('./modal/display-user-maindooeuvre/display-user-maindooeuvre.module').then( m => m.DisplayUserMaindooeuvrePageModule)
  },
  {
    path: 'displa-all-maindoeuvre',
    loadChildren: () => import('./modal/displa-all-maindoeuvre/displa-all-maindoeuvre.module').then( m => m.DisplaAllMaindoeuvrePageModule)
  },
  {
    path: 'display-executant',
    loadChildren: () => import('./modal/display-executant/display-executant.module').then( m => m.DisplayExecutantPageModule)
  },
  {
    path: 'justificatif',
    loadChildren: () => import('./pages/justificatif/justificatif.module').then( m => m.JustificatifPageModule)
  },
  {
    path: 'ajouteractivite',
    loadChildren: () => import('./modal/ajouteractivite/ajouteractivite.module').then( m => m.AjouteractivitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
