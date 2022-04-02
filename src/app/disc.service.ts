import { Injectable } from '@angular/core';

interface Disc{
  title: string;
}

interface Disciplinas{}

@Injectable()
export class DiscService {
  list: Array<Disc> = [];
  lista: Array<Disciplinas> = [
    "Desenvolvimento para Servidores II | Quinta-Feira | 19:00-22:30",
    "Tópicos Especiais em Sistemas para Internet II | Quinta-Feira | 19:00-22:30",
    "Tópicos Especiais em Sistemas para Internet III | Sexta-Feira | 19:00-22:30",
    "Desenvolvimento para Dispositivos Móveis II | Sábado | 13:30-17:00"
  ];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({title});
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  getLista() {
    return this.lista;
  }
}