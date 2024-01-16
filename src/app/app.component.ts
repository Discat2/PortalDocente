import { Component, OnInit } from '@angular/core';
import { Docente, Especialidad, ListMenu} from './domain/Interfaces';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PortalDocente';
  items!: ListMenu[];
  docente!: Docente[];

  constructor(private serviceData: DataService){}
  
  ngOnInit() {
    this.serviceData.getDataMenu().then((data) => { this.items = data;});
    this.serviceData.DataTable().subscribe(data => { 
      this.docente = data;
      console.log(this.docente);
    });
  }
}
