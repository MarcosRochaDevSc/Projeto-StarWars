import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-personagens',
templateUrl: './personagens.component.html',
styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
personagens: any;
showDetails = false;
showHabilidade = false;
exibirTexto = false;


constructor(private http: HttpClient) { }

ngOnInit() {
this.http.get('http://localhost:3000/personagens')
.subscribe(personagens => {
this.personagens = personagens;
});
}

adicionarTexto() {
this.exibirTexto = true;
}

Details() {
this.showDetails = !this.showDetails;
}

Habilidade() {
this.showHabilidade = !this.showHabilidade;
this.showDetails = false;
}


}