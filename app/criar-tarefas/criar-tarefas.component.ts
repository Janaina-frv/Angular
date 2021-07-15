import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa/tarefa.model';

@Component({
  selector: 'app-criar-tarefas',
  templateUrl: './criar-tarefas.component.html',
  styleUrls: ['./criar-tarefas.component.css']
})
export class CriarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', {static:true}) formTarefa: NgForm;
  tarefa:Tarefa;

constructor(private tarefaService: TarefaService,
  private router:Router) { }

ngOnInit(): void {
  this.tarefa = new Tarefa();
}

criar(){
  if(this.formTarefa.form.valid){
    //preciso chamar um serviço que possa cadastrar o funcionario
    console.log("teste");
    this.tarefaService.cadastrar(this.tarefa);
    this.router.navigate(["/tarefas"]);
  }
}

}
