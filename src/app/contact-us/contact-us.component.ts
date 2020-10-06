import { Component, OnInit, HostListener  } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormArray, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  object;

  constructor(public db: AngularFireDatabase) {

    this.object = { name: 'kartik', subject: 'This is subject', message: 'This is a Message' }

    // db.object('contactus/'+db.createPushId()).set(this.object).then(res => {
    //   console.log(res)
    // });

    db.list('contactus').valueChanges().subscribe(res => console.log(res))

  }

  contact = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  })

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  homeHeader = true;

  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    if (event.path[1]['scrollY'] > (window.innerHeight - 20)) {
      this.homeHeader = false;
    }
    else {
      this.homeHeader = true;
    }
  }

  submit() {

    this.object = { name: this.contact.get('name').value, email: this.contact.get('email').value, contact: this.contact.get('contact').value, subject: this.contact.get('subject').value, message: this.contact.get('message').value }

    this.db.object('contactus/' + this.db.createPushId()).set(this.object).then(res => {
      console.log(res);

      document.getElementById("form-wrap").classList.remove("form-wrap-anim")
      document.getElementById("form").classList.remove("form-anim")

    }).catch(err => {
      console.log(err)
    })

  }

  open() {
    document.getElementById("form-wrap").classList.add("form-wrap-anim")
    document.getElementById("form").classList.add("form-anim")
  }

}
