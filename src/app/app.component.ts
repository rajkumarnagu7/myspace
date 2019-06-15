import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from './registerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'registration';

  constructor(private resservice:RegisterserviceService){

  }

  ngOnInit(){
    this.getTeams();
  }

user = {
  uname:'',
  fname:'',
  lname:'',
  email:'',
  phone:'',
  address1:'',
  address2:'',
}

register(signupform){
  this.resservice.registeruser(this.user)
        .subscribe(
          res => { console.log('successfully added User into the database'), 
          alert('successfully Registered'), 
          
          console.log(this.user)
          
          /* this.user = {
            uname:'',
            fname:'',
            lname:'',
            email:'',
            phone:'',
            address1:'',
            address2:'',
            
          } */
          
        }
        
        )
        signupform.reset();
        
}
file;
filetoupload(event) {
  this.file = event.target.files[0];
  console.log(this.file);
  this.resservice.upload(this.file)
  .subscribe(
    res => console.log(res)
  )
}

team = [];
id = "user-1";
heropic;
getTeams() {
  this.resservice.getteambyid(this.id)
    .subscribe(
      res => { this.team = res[0], console.log(res),
        console.log(res[0].Image.filename)
        this.heropic = "http://localhost:3000/api/image/"+res[0].Image.filename
      }
    )
}

}
