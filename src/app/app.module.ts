import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store/'
import { todos } from './redux/reducer';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ todos })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
