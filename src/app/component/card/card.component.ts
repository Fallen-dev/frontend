import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { URL } from '../../url'
import { plural } from '../../util'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})

export class CardComponent implements OnInit {
  repos!: [] | null
  loaded = false
  plural = plural

  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.http.get(`${URL}/repos/${this.router.snapshot.queryParamMap.get('name')}`)
    .subscribe((res: any) => {
      this.repos = res
      this.loaded = true
    },
    (error: any) => console.log('Repo fetching failed'))
  }
}
