import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { LoggingService } from './logging.service';

@NgModule({
  // ...
  // COMPONENTS, DIRECTIVES, CUSTOM PIPES
  declarations: [AppComponent, HeaderComponent],
  // ...
  // OTHER MODULES
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule,
  ],
  // ...
  // SERVICES
  // providers: [LoggingService],
  // ...
  // STARTING APP COMPONENT (ROOT COMPONENT)
  bootstrap: [AppComponent],
})
export class AppModule {}
