// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ngrx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// ngrx imports
import { reducers, metaReducers } from './reducers/reducers';


// configs
import { appRoutes } from './app.routing';
import { environment } from '../environments/environment';


// components
import { AppComponent } from './app.component';


const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  StoreDevtoolsModule.instrument({
    name: 'AngularChatNGRX',
    logOnly: environment.production,
  }),
  EffectsModule.forRoot([])
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ...NGRX_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
