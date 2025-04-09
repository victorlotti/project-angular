import { HeaderService } from './../../components/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerModel.router = "/"
    headerService.headerModel.title = "Início"
    headerService.headerModel.icon = "home"
}

ngOnInit(): void {
}

}