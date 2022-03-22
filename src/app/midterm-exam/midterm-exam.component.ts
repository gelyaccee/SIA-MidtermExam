import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-midterm-exam',
  templateUrl: './midterm-exam.component.html',
  styleUrls: ['./midterm-exam.component.css']
})
export class MidtermExamComponent implements OnInit {

  Users : any
  search = ''

  constructor(private router: Router,
    private records: UserService) {
      this.browse();
     }

  browse(){
    this.records.fetchUser().subscribe((result:any)=>{
      this.Users = result 
    })
  } 

  searchdata(){
    if(this.OptionSelected == '0'){
      this.getSpecificByKey('id',this.search)
    }else if(this.OptionSelected == '1'){
      this.getSpecificByKey('name',this.search)
    }else if(this.OptionSelected == '2'){
      this.getSpecificByKey('username',this.search)
    }else if(this.OptionSelected == '3'){
      this.getSpecificByKey('email',this.search)
    }
  }

  getSpecificByKey(option:string, value:string){ 
    // this.browse()
    var temUsers = []
    var counter = this.Users.length 
    var loopcount = 0
    while(counter > loopcount){
      if(value == this.Users[loopcount][option]){
        temUsers.push(this.Users[loopcount]) 
      } 
      loopcount = loopcount + 1
    } 
    
    this.Users = []
    this.Users = temUsers
  }

  OptionSelected ='0'
  onOptionsSelected(value:string){
    this.OptionSelected= value
  }

  sort(){
    var sortedUser = this.records.sortdatabyID(this.Users)
    this.Users = sortedUser
  }

  remove(id:number){
    delete this.Users[id]  
  }

  ngOnInit(): void {
  }

}
