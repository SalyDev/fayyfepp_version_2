import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-pin',
  templateUrl: './code-pin.page.html',
  styleUrls: ['./code-pin.page.scss'],
})
export class CodePinPage implements OnInit {

  pinForm: FormGroup;
  subTitle: string;
  telephone: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router
    ) { 
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.telephone){
        //
        this.telephone = this.router.getCurrentNavigation().extras.state.telephone;
        console.log(this.router.getCurrentNavigation().extras.state.telephone);
      }
      // if(this.router.getCurrentNavigation().extras.state.subTitle){
      //   //
      //   this.subTitle = this.router.getCurrentNavigation().extras.state.subTitle;
      //   console.log(this.router.getCurrentNavigation().extras.state.subTitle);
      // }
    }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.pinForm = this.formBuilder.group({
      c1: ['', Validators.required],
      c2: ['', Validators.required],
      c3: ['', Validators.required],
      c4: ['', Validators.required],
      c5: ['', Validators.required],
      c6: ['', Validators.required]
    });
  }

  onSubmit()
  {
    // console.log("submit");
    // this.ngOnInit();
    if(this.pinForm.valid){
      const pin = this.pinForm.controls.c1.value + this.pinForm.controls.c2.value + this.pinForm.controls.c3.value + this.pinForm.controls.c4.value + this.pinForm.controls.c5.value + this.pinForm.controls.c6.value;
    
      this.router.navigate(['/confirmation-code-pin'], { state: { telephone : this.telephone, pin: pin } });
    }

    
  }

}
