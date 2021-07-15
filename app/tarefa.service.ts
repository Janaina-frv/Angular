import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

      listarTodos() : Tarefa[] {
          const tarefas = localStorage['tarefas'];
          return tarefas ? JSON.parse(tarefas) : [];
      }

      cadastrar (tarefa:Tarefa):void{
        const tarefas = this.listarTodos();
        tarefa.etapa = new Date().getTime();
        tarefas.push(tarefa);
        localStorage['tarefas'] = JSON.stringify(tarefas);
      }

      buscarPorId(etapa:number): Tarefa{
        const tarefas = this.listarTodos();
        return tarefas.find(tarefa => tarefa.etapa === etapa);
      }

      atualizar(tarefa: Tarefa):void{
        const tarefas: Tarefa[] = this.listarTodos();
        tarefas.forEach((func,pos,funcs) => {
            if(tarefa.etapa ===func.etapa){
              funcs[pos] = tarefa;
            }
        });
        localStorage['tarefas'] = JSON.stringify(tarefas);
      }

      remover(etapa:number):void{
        let tarefas: Tarefa[] = this.listarTodos();
        tarefas = tarefas.filter(tarefa => tarefa.etapa !== etapa);
        localStorage['tarefas'] = JSON.stringify(tarefas);    
      }


}
