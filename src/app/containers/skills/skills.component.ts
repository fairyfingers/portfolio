
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export default class SkillsComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  
  ngOnInit() {
    const url = this._router.url.split('/');
    const conditions = [
      url.some(el => el === 'communication'),
      url.some(el => el === 'tech-intelligence'),
      url.some(el => el === 'architecture-design'),
      url.some(el => el === 'client-interaction'),
      url.some(el => el === 'tests')
    ];

    if (!conditions.some(condition => condition)) {
      this._router.navigate(['communication'], {
        relativeTo: this._route
      });
    }
  }
}