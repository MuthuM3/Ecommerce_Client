import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class SignupComponents implements OnInit, OnDestroy {
  routePath: string | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routePath = this.route.snapshot.routeConfig?.path;
  }

  ngOnDestroy(): void {

  }
}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class SigninComponents implements OnInit, OnDestroy{
  routePath: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routePath = this.route.routeConfig?.path;
  }

  ngOnDestroy(): void {
  }

}
