import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PopoverMenuComponent } from './popover-menu/popover-menu.component';

import { HttpClientModule } from '@angular/common/http';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FormsModule } from '@angular/forms';

import { SearchOrganizationModalComponent } from './search-organization-modal/search-organization-modal.component';



@NgModule({
  declarations: [AppComponent, PopoverMenuComponent, SearchOrganizationModalComponent],
  entryComponents: [PopoverMenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
