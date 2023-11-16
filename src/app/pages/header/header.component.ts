import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  onSubmit(f: NgForm) {
    this.router.navigate(['/search']);
    console.log(f.value.search);
  }

}
