import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie';

/**
 * Generated class for the FilmeDetahesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detahes',
  templateUrl: 'filme-detahes.html',
  providers: [MoovieProvider]
})
export class FilmeDetahesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider
    ) {

  }

  ionViewDidLoad() {
    
    this.filmeid = this.navParams.get("id");
    
    this.movieProvider.getsMoviesDetails(this.filmeid).subscribe(data=>{

      
      this.filme = data;
      console.log(data);

    }, error =>{

    })
  }

}
