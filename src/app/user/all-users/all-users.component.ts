import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  dataArr:any[]=[];
  loader=false;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loader=true;
    this.userService.getUsers().subscribe(data=>{
      if(data){
        console.log('ddd',data);
        this.dataArr=data;
        this.loader=false;
      }
    })
  }

}
