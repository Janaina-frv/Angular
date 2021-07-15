import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa/tarefa.model';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas:Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();

  }

  listarTodos():Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event:any, tarefa:Tarefa){
    $event.preventDefault();
   if(confirm("Deseja realmente remover a tarefa >>>" + tarefa.titulo + "<<< ?")){
     this.tarefaService.remover(tarefa.etapa);
     this.tarefas = this.tarefaService.listarTodos();
   }
  }

}
