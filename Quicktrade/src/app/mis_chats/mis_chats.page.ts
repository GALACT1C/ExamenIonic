import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { IChats } from '../interfaces';

export class Mis_ChatsPage {

    constructor(private productosService: ProductoService, private afAuth: AngularFireAuth, private _mgService : Mis_ChatsService) {
  
    }
    chats: IChats[chats] = [];
  
    Chats(){
      this.chats = [];
  }
}