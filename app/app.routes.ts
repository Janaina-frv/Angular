import { CriarTarefasComponent } from './criar-tarefas/criar-tarefas.component';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import { Routes } from "@angular/router";
import { AtualizarTarefasComponent } from './atualizar-tarefas/atualizar-tarefas.component';

export const ROUTERS: Routes = [
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: '',
        redirectTo: 'tarefas/listar',
        pathMatch: 'full'
    },
    {
        path: 'tarefas/criar',
        component: CriarTarefasComponent
    },
    {
        path: 'tarefas/atualizar/:etapa',
        component: AtualizarTarefasComponent
    }
    
    ]