import { HttpBackend } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie';
import { FilmeDetahesPage } from '../filme-detahes/filme-detahes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider,

  ]
})
export class FeedPage {

  public objeto_feed= {
      titulo:"Gabriel Ciriaco",
      data: "19 de fevereiro de 2021",
      descricao:"Texto qualquer que a pessoa tenha digitado para ser a descrição da imagem",
      qntd_likes:12,
      qntd_comments:4,
      time_comment:"11 hrs atras",

  }

  public lista_filmes = new Array<any>();

  public nome_usuario: string = "Gabriel Ciriaco do código";

  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public moovieProvider: MoovieProvider
    ) {
  }

  public soma( num1:number, num2:number): void{
    //alert(num1 + num2);
    
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();

    
  }

  ionViewDidLoad() {
    
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetahesPage, { id: filme.id});
  }

  carregarFilmes(){
    this.moovieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(data);

        if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
        }
      }, error=>{
        console.log(error);
      })
           
      
  }

}
