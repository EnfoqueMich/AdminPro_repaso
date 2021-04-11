// RouterModule es necesario para poder exportar las rutas y usarlas.
// Routes es necesario para poder definir las rutas que utilizaresmos
import { RouterModule, Routes } from '@angular/router';

// Estos son los módulos y tienen que estar importados aquí, para poder usarlos como rutas
// si definimos una ruta y no esta el módulo importado fallará.
// En este módulo tendremos todo el contenido de administración y las rutas.
import { PagesComponent } from './pages/pages.component';
    // Utilizamos estos 3 módulos como hijas de nuestro compomente PAGES
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

// Para la ruta del Login
import { LoginComponent } from './login/login.component';
// Para la ruta del Registro
import { RegisterComponent } from './login/register.component';
// Para la ruta cuando buscan algo y no existe en nuestra aplicación
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

// 1. Ya creadas las rutas necesitamos utilizarlas
// 2. Utilizamos el --> import { RouterModule } from '@angular/router';
// 3. Creamos una constante APP_ROUTES = a la primera constante (appRoutes) y la exportamos con --> export
// 4. Para utilizarlas en la aplicación la importamos el el APP.MODULE.TS
const appRoutes: Routes = [
    // Rutas permitidas para la administración
    { path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            // Si la ruta no es Login Register, nos manda al Dashboard y en caso de que no exista la ruta los redigira a esta ubicación
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    // cualquier otra ruta que intenten poner y no este definida aquí, mostrará el componente "NO PAGE FOUND"
    { path: '**', component: NopagefoundComponent }
];

// Utilizamos el - useHash: true - para evitar problemas con las rutas
// Siempre que exportamos un 'Module' hay que colocarlo en los 'IMPORTS' del APP.MODULE.TS
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true } );
