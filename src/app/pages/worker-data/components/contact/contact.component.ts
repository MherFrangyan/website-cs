import { Component, OnInit } from "@angular/core";
import { SendEmailService } from "../../../../service/send-email.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: "cv-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {

  public loader = false;
  public sendIcon = faArrowRightLong;

  public form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  constructor(private emailService: SendEmailService,
              private toastr: ToastrService) {
  }

  public send() {
    this.loader = true;
    this.form.disabled;
    const body = {
      _reply: this.form.value.email,
      message: this.form.value.message,
      name: this.form.value.name
    }

    console.log(this.form.value);
    this.emailService.sendEmail(body).subscribe(res => {
      this.toastr.success('Message sent successfully');
      location.href = 'https://mailthis.to/confirm'
      this.loader = false;
      this.form.reset();
      this.form.enabled;
    }, error => {
      this.form.enabled
      this.loader = false;
      this.toastr.success('Oops something went wrong');
    });
  }
}
