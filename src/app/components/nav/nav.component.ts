import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Lien } from 'src/app/models/lien.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Lien[] = [
    {nom : "Demo bindings", url :"demo_01"},
    {nom : "Demo Pipes", url :"demo_02"},
    {nom : "Demo Directives", url :"demo_03"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
