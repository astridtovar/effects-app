import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [ListaComponent, UsuarioComponent],
  imports: [CommonModule],
  exports: [ListaComponent, UsuarioComponent],
})
export class UsuariosModule {}
