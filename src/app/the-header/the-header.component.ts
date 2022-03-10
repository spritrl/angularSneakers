import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.scss']
})
export class TheHeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
