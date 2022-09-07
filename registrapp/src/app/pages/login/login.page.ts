import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
//import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// Modelo para el login de un usuario
login:any={
  Usuario:"",
  Password:""
}

field:string="";

  constructor() { }

  ngOnInit() {
  }

}
