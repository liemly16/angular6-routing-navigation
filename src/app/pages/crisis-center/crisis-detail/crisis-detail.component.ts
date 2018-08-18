import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crisis, CrisisService } from '../../../providers/crisis.service'

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.crisis = this.crisisService.getCrisis(id);
  }

  ngOnChanges() {
  }

}
