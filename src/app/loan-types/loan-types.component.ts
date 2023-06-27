import { Component, OnInit, SimpleChanges} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit{

  addLoanTypesForm  : FormGroup;
  user : any = null;

  constructor(private fb: FormBuilder,
              private userService: UsersService){ }
  
  ngOnInit(): void {

    
    this.user = this.userService.getUsers();
    console.log(this.user);

   /* 
    this.addLoanTypesForm.get('loanName').valueChanges.subscribe(data =>{
      console.log(data);
    })
    */

    /*
    this.addLoanTypesForm = new FormGroup({
      'loanName'  : new FormControl(),
      'loanDescription' : new FormControl(),
      'loanType'  : new FormControl()
    })
    */

    /*
    //Way 1:  Direct way of setting the form value at form creation.

    this.addLoanTypesForm = this.fb.group ({
      'loanName'  : new FormControl('sooryas loan'),
      'loanDescription' : new FormControl('personal loan'),
      'loanType'  : new FormControl('This is for Laptop')
    })
    */

    // use case #1 -> defining a simple FormArray */
    let users = new FormArray([
      new FormControl('ARC'),
      new FormControl('Tutorial')
    ]);

    console.log(users);
    console.log(users.value);


    //Way 2: Below is the another way of setting values of form
    this.addLoanTypesForm = this.fb.group ({
      'loanName'  : new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)

          ]
        ),
        'loanType'  : new FormControl('', Validators.required),
      'loanDescription' : new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ])),
      /*
      'users': new FormArray([
        new FormControl('ARC'),
        new FormControl('Tutorial')
      ])
      */
      // FormArray with a FormGroup
      'users': new FormArray([
        this.fb.group({
          name: new FormControl(''),
          age: new FormControl(''),
          dept: new FormControl('')
        })
      ])

      // Adding and Removing the elements from FormArray dynamically

    })

    /*
    const newLoanObj = {
      'loanName'  : 'My Loan Application',
      'loanDescription' : 'This is loan for 3bhk Flat',
    }
    */

    /* Use SetValue:
       Here setting the values with the help of above "addLoanTypesForm"
       Note: The setValue requires data/values for all the “fields/keys”, if you 
       don’t pass value you will see error.
    */
    //this.addLoanTypesForm.setValue(newLoanObj);

    /* Way 3: Use PatchValue 
      -> you don't have to pass all key / values
      -> only selected keys / fields data can be set
      The only difference is -> you do not have to pass all "keys/fields"
    */
    //this.addLoanTypesForm.patchValue(newLoanObj);

    this.addLoanTypesForm.statusChanges.subscribe(data =>{
      console.log("form status:")
      console.log(data);
    })

    // this.addLoanTypesForm.get('loanName').statusChanges.subscribe(data =>{
    //   console.log("formControl status:");
    //   console.log(data);
    // })


  }

  get users(): FormArray{
    return this.addLoanTypesForm.get('users') as FormArray;
  }

  addUser(){
    //let userArr = this.users;
    let userArr = this.addLoanTypesForm.get('users') as FormArray;
    let newUser = this.fb.group({
      'name': '',
      'age': '',
      'dept': ''
    });

    userArr.push(newUser);

  }

  removeUser(i){
    let arr = this.addLoanTypesForm.get('users') as FormArray;
    arr.removeAt(i);
  }

  assignDept(i){
    console.log(i);
    let arr = this.addLoanTypesForm.get('users') as FormArray;
    let values = arr.value;
    if(arr.value[i].age > 55){
      arr.value[i].dept = 'ADMIN';
    }
    else{
      arr.value[i].dept = 'CSE';
    }
    this.users.setValue(arr.value);
  }


  addLoanType(){
    console.log(this.addLoanTypesForm.value);
    if(this.addLoanTypesForm.valid){
      
    }
    if(this.addLoanTypesForm.invalid){

    }

    console.log(this.addLoanTypesForm.valid);
    console.log(this.addLoanTypesForm.invalid);
    console.log(this.addLoanTypesForm.pending);
    console.log(this.addLoanTypesForm.pristine);
    console.log(this.addLoanTypesForm.dirty);
    console.log(this.addLoanTypesForm.touched);
    console.log(this.addLoanTypesForm.untouched);


    // console.log(this.addLoanTypesForm.value);
    //console.log(this.addLoanTypesForm.get('loanType').value)
    /*
    console.log(this.addLoanTypesForm.valid);
    this.addLoanTypesForm.valueChanges.subscribe(data => {
      console.log(data);
    });
    */
    
  }

  resetForm(){
    this.addLoanTypesForm.reset();
  }

}
