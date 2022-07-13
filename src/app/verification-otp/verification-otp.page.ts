import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendCodeService } from '../_helpers/send-code.service';
import { UtilService } from '../_helpers/util.service';

@Component({
  selector: 'app-verification-otp',
  templateUrl: './verification-otp.page.html',
  styleUrls: ['./verification-otp.page.scss'],
})
export class VerificationOtpPage implements OnInit {

  otpForm: FormGroup;
  pinId: string;
  telephone: string;

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private sendCodeService: SendCodeService,
    private utilService: UtilService
    ) {
      console.log("constuctor");
    // console.log(this.router.getCurrentNavigation().extras.state.telephone);
    // console.log(this.router.getCurrentNavigation().extras.state.pinId);
    if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.pinId){
      this.pinId = this.router.getCurrentNavigation().extras.state.pinId;
    }
    if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.telephone){
      this.telephone = this.router.getCurrentNavigation().extras.state.telephone;
    }

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.otpForm = this.formBuilder.group({
      c1: ['', Validators.required],
      c2: ['', Validators.required],
      c3: ['', Validators.required],
      c4: ['', Validators.required]
      // nom: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("sub");
    console.log(this.otpForm.controls.c1.value);
    const code = this.otpForm.controls.c1.value + this.otpForm.controls.c2.value + this.otpForm.controls.c3.value + this.otpForm.controls.c4.value;
    console.log(code);
    console.log(this.pinId);
    this.router.navigate(['/code-pin'], { state: { telephone: "789878767" } })

    // this.sendCodeService.verifyCode("c8dcd048-5e7f-4347-8c89-4470c3af0b", code).subscribe(
    // this.sendCodeService.verifyCode(this.pinId, code).subscribe(
    //   (data:any)=>{
    //     console.log(data)
    //     // si le code est bon 
    //     if(data.verified==true){
    //       this.utilService.showSuccessToast("Code vérifié");
    //       // on le redirige pour fixer son code PIN
    //       this.router.navigate(['/code-pin'], { state: { telephone: this.telephone } })

    //     }else{
    //       // si c un mauvais code otp
    //       this.utilService.showErrorToast("Mauvais code");
    //     }
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
  }

  resendCode()
  {
    this.sendCodeService.sendOTP(this.router.getCurrentNavigation().extras.state.telephone).subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
