import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  username!:string
  placeholder = 'Search'

  constructor(private route: Router) {}

  focusTo(value: any) {
    console.log(value)
  }

  gotoPage(value: string) {
    if (value.length !== 0) {
      this.username = value
      this.route.navigate(['/user'], {
        queryParams: { name: this.username }
      })
    }
    return this.placeholder = 'Can\'t be empty\!'
  }
}
