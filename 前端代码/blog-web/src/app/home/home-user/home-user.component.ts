import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

	user = {
		nickName: "JustFresh",
		sex: "男",
		userEmail: "justfresh@foxmail.com",
		userPhone: "155****9776",
		abstracts: "简单..."
	}
  constructor() { }

  ngOnInit() {
  }

}
