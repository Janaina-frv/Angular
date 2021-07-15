import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa/tarefa.model';

@Component({
  selector: 'app-atualizar-tarefas',
  templateUrl: './atualizar-tarefas.component.html',
  styleUrls: ['./atualizar-tarefas.component.css']
})
export class AtualizarTarefasComponent implements OnInit {

  constructor(
    private tarefaService: TarefaService, 
    private router:Router, 
    private route:ActivatedRoute) { }


  @ViewChild('formTarefa', {static:true}) formTarefa: NgForm;
  tarefa:Tarefa;

  ngOnInit(): void {
    const etapa:number = +this.route.snapshot.params['etapa'];
    this.tarefa = this.tarefaService.buscarPorId(etapa);
  }

  atualizar(){
    if(this.formTarefa.form.valid){
      //preciso chamar um serviço que possa cadastrar o funcionario
      console.log("teste");
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }


}
