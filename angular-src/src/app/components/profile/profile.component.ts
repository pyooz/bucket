import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string;
  username: string;
  email: string;


  // todoList
  title = 'TodoList with Angular';
  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
  }


  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter((item) => item.id !== id);
  }


  // private LOGO = require("./assets/pat1.jpg");

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    //프로필 페이지 들어오는 순간에 사용할 기능
    this.authService.getProfile().subscribe(
      (profile) => {
        // = profile.*이름*.name(/username/email)에서 *이름*은 /routes/users.js 의 3번 res.json({ *이름*:{}과 같아야함.!!!! })
        this.name = profile.userNoPW.name;
        this.username = profile.userNoPW.username;
        this.email = profile.userNoPW.email;
      }, 
      (err) => {
        console.log(err);
        return false;
      }
    );
    
  }

}




// oninit{

//   constructor() { }

//   ngOnInit(): void {
//     let userNoPW: any = localStorage.getItem('userNoPW');
//     this.username = JSON.parse(userNoPW).username;
//     let cardInfo: any = localStorage.getItem('card');
//     this.card = cardInfo;
//     this.value = this.card;
//   }
// }


