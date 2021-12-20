import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnDestroy {

  constructor() { }
  
//Le ngOnDestroy provient de l'interface OnDestroy et sera exécuté lors du déchargement du component  
  ngOnDestroy(): void {
    console.log('Je me meurs...')
  }
//Le ngOnInit provient de l'interface OnInit et s'exécute dès l'appel du component
  ngOnInit(): void {
    alert("toto");
  }

}
