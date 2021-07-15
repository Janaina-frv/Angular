import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTERS } from './app.routes';
import { TarefaModule } from './tarefa/tarefa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTERS),
    FormsModule,
    TarefaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
