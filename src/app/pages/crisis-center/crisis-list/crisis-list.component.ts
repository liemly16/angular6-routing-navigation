import { Component, OnInit } from '@angular/core';
import { CrisisService, Crisis } from '../../../providers/crisis.service'

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crisises: Crisis[]

  constructor(
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.crisises = this.crisisService.getCrisses();
  }

}
