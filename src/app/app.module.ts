import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
