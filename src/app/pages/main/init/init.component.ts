import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { DocumentValidator } from '../../../shared/helper/cpf-validator.component';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  public document = new FormControl('');
  public isSubmited = false;

  public documentForm: FormGroup = this.formBuilder.group({
    document: ['', [Validators.required, Validators.pattern(DocumentValidator.documentRegex)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,


  ) {
  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.isSubmited = true;
    console.log(this.documentForm);
    this.userService.getCadastralStatus(this.documentForm.controls['document'].value)
      .subscribe(res => {
        console.log(res);
      });
  }

}
