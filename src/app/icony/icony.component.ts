import { Component, Input, OnInit } from '@angular/core';
import { faCircle, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icony',
  templateUrl: './icony.component.html',
  styleUrls: ['./icony.component.css']
})
export class IconyComponent implements OnInit {

  @Input() iconName: string | undefined;

  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() {}

  ngOnInit(): void {
  }

}
