import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { URL } from '../../url'
import { plural } from '../../util'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {
  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) {}

  name!: string
  img!: string
  url!: string
  real_name!: string
  bio!: string
  twitter_username!: string
  repos!: string
  followers!: string
  following!: string
  location!: string

  loaded = false
  plural = plural

  ngOnInit(): void {
    this.http.get(`${URL}/${this.router.snapshot.queryParamMap.get('name')}`)
    .subscribe(
      (res: any) => {
        this.name = res.name
        this.url = res.url
        this.real_name = res.real_name
        this.bio = res.bio
        this.twitter_username = res.twitter_username
        this.repos = res.repos
        this.followers = res.followers
        this.following = res.following
        this.location = res.location
        this.img = res.img
        this.loaded = true
        console.log(res)
      },
     (err) => this.route.navigate(['/oops'], {
       queryParams: { status: err.status }
    }))
  }
}
