import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export default class ProjectsComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  
  ngOnInit() {
    const url = this._router.url.split('/');
    const conditions = [
      url.some(el => el === 'by'),
      url.some(el => el === 'fork'),
      url.some(el => el === 'garrison')
    ];

    if (!conditions.some(condition => condition)) {
      this._router.navigate(['by'], {
        relativeTo: this._route
      });
    }
  }
}