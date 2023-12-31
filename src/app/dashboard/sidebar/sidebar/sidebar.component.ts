import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menulista = [{
    id: 1,
    nome: "Pedido",
  },
  {
    id: 2,
    nome: "Pessoa",
  },
  {
    id: 3,
    nome: "Material"
  },];

  constructor(
    private sidebarService: SidebarService,
    private http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {

  }

  abrirRota() {
    this.router.navigate(['/login']);
  }

}
