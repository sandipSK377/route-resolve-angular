import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  dataArr:any[]=[];
  loader=false;
  interval:any;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loader=true;
    this.interval=setInterval(()=>{
      this.userService.getUsers().subscribe(data=>{
        if(data){
          console.log('ddd',data);
          this.dataArr=data;
          this.loader=false;
        }
      })
    },4000)

  }
ngOnDestroy(){
  clearInterval(this.interval);
}

}
