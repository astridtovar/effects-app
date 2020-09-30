import * as usuariosActions from './../actions/usuarios.actions';
import {
  Actions,
  createEffect,
  Effect,
  ofType
  } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  switchMap
  } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() => this.usuarioService.getUsers()
        .pipe(
          map( (users) => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
          catchError((err) => of(usuariosActions.cargarUsuariosError({ payload: err })))
        )
      )
    )
  );

  // @Effect()
  // cargarUsuarios$ = this.actions$.pipe(
  //   ofType(usuariosActions.cargarUsuarios),
  //   switchMap(() =>
  //     this.usuarioService.getUsers().pipe(
  //       map(
  //         (users) => usuariosActions.cargarUsuariosSuccess({ usuarios: users }),
  //         catchError((err) =>
  //           of(usuariosActions.cargarUsuariosError({ payload: err }))
  //         )
  //       )
  //     )
  //   )
  // );
}
