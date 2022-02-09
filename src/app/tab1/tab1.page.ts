import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';

  listaVideos: IFilme[] = [
    {
      nome: 'Rambo (1982)',
      lancamento: '06/11/1982',
      duracao: '1h 34m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dDJ4YOz7baCHH6ZJPut9NcCgNl1.jpg',
      generos: ['Ação', 'Aventura', 'Thriller', 'Guerra'],
      pagina: '/rambo'
    },
    {
      nome: 'De Volta para o Futuro (1985)',
      lancamento: '25/12/1985',
      duracao: '1h 55m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4BTW7PyEYFUFlNpuSeS9hAbpk9P.jpg',
      generos: ['Aventura', 'Comédia', 'Ficção científica', 'Família'],
      pagina: '/de-volta-para-o-futuro'
    },
    {
      nome: 'Desafiando Gigantes (2006)',
      lancamento: '29/09/2006',
      duracao: '1h 51m',
      classificacao: 75,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sb59Xr3ckkUH7r6EtCZC9EBV5JB.jpg',
      generos: ['Drama'],
      pagina: '/desafiando-gigantes'
    },
    {
      nome: 'À Prova de Fogo (2008)',
      lancamento: '21/12/2008',
      duracao: '2h 2m',
      classificacao: 74,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fX1n097j6l7Y47jtph8Z4SwJkbR.jpg',
      generos: ['Drama', 'Romance'],
      pagina: '/a-prova-de-fogo'
    }

  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos!',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

}
