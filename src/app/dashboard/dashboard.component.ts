import { Component, OnInit } from '@angular/core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGrin } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faDesktop = faDesktop;
  faDatabase = faGrin;
  faChevronDown = faChevronDown;
  faFile = faFile;
  faSuitcase = faSuitcase;
  faSidebar = faSlidersH;
  constructor() { }

  ngOnInit(): void {
  }

}
