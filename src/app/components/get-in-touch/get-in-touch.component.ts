import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css'],
  providers: [MailService],
})
export class GetInTouchComponent implements OnInit {
  public usermsg: any;
  public loading: boolean;
  public status: number;

  constructor(
    public _mailService: MailService
    ) {
    this.usermsg = {
      fullname: '',
      email: '',
      subject: '',
      message: '',
    };
    this.loading = false;
    this.status = 0;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.status = 0;
  }

  onSubmit() {
    this.loading = true;
    this._mailService.mail(this.usermsg).subscribe(
      (response) => {
        if (response.ok) {
          console.log(response);
          this.loading = false;
          this.status = 1;
        } else {
          console.log("error");
          this.loading = false;
          this.status = 2;
        }
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.status = 2;
      }
    );
  }
}
