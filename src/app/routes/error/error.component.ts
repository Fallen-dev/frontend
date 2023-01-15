import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  status = this.router.snapshot.queryParamMap.get('status') || undefined
  errorText!:string
  btnLabel!: string

  ngOnInit(): void {
    if(!this.status) {
      this.errorText = 'Oof! Looks like the server doesn\'t like it'
      this.btnLabel = 'Back to home'
    }
    else if (this.status!.startsWith('4')) {
      this.errorText = 'That user doesn\'t exist.'
      this.btnLabel = 'Try again'
    } else {
      this.errorText = 'Something\'s fishy here.'
      this.btnLabel = 'Go to home'
    }
  }
}
