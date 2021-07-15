import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa.service';

import { AtualizarTarefasComponent } from '../atualizar-tarefas/atualizar-tarefas.component';
import { CriarTarefasComponent } from '../criar-tarefas/criar-tarefas.component';
import { ListarTarefasComponent } from '../listar-tarefas/listar-tarefas.component';



@NgModule({
  declarations: [
    ListarTarefasComponent,
    AtualizarTarefasComponent,
    CriarTarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefaModule { }