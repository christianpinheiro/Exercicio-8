import { Component, OnInit } from '@angular/core';
import { DiscService } from '../disc.service';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit {

  constructor(public disciplinas: DiscService, public disc: DiscService) { }

  ngOnInit() {
  }

}