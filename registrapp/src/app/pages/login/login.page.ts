import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// Modelo para el login de un usuario
login:any={
  usuario:"",
  password:""
}

field:string="";

  constructor(private router:Router) { }

  ngOnInit() {
  }

navegar(){
  let navigationExtras:NavigationExtras={
    state:{
      login:this.login
    }
  };
  this.router.navigate(['./recover'],navigationExtras);
}

}
