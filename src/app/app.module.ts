import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// components
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { SearchComponent } from './component/search/search.component';
import { TitleComponent } from './component/title/title.component'

// routes
import { ErrorComponent } from './routes/error/error.component';
import { UserComponent } from './routes/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserComponent,
    SearchComponent,
    ErrorComponent,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
