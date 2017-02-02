// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@Component({
    selector: 'login',
    template: `
    <div class="ui raised segment">  
    <h2 class="ui header">Demo Form: Login</h2>  
    <form #f="ngForm"  
          (ngSubmit)="onSubmit(f.value)"  
          class="ui form">
 
      <div class="field">  
        <label for="skuInput">Login Form</label>  
        <input type="text"  
               id="skuInput"  
               placeholder="Username"  
               required="required"
               name="username" ngModel>  
         <input type="password" name="password" ngModel placeholder="Password" required="required" />               
      </div>
 
      <button type="submit" class="ui button">Submit</button>  
    </form>  
  </div> 

`
})


//    <div class="login">
// 	<h1>Login</h1>
//     <form method="post">
//     	<input type="text" name="u" placeholder="Username" required="required" />
//         <input type="password" name="p" placeholder="Password" required="required" />
//         <button (click)="submit()" class="btn btn-primary btn-block btn-large">Let me in.</button>
//     </form>
    
// </div>

export class LoginComponent{
    constructor(private userService: UserService, private router: Router){ }

    onSubmit(form : any){
            console.log('you submitted value:', form);  
            let username = form.username;
            let password = form.password;

        if(this.userService.login(username, password)){
                    this.router.navigate(['rickey']);
        }else{
            this.router.navigate(['home']);
        }
        

    }

}

