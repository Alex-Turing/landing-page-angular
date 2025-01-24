import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /**
   * De esta manera se genera la logica de 
   * un formulario basado formularios reactivos
   */
  contactForm: FormGroup;
  typeOfId?: string;
  showId:boolean = false;

  /**
   * Este objeto de ejemplo fue usado para ver como puedo setar y/o
   * deshabilitar los field en ngOnInit function. Se comenta para correr
   * un codigo diferente en ngOnInit. Algo muy, muy importante llamado 
   * Suscripciones
   */
  //activeUser:any = {      //Este valor puede ser un valor que se trae de otro componente o de un backend, para este ejemplo solo lo inicializo aca
  //  name: 'Alex',
  //  lastName: 'Hernandez',
  //  id: '123456'
  //}; 

  constructor(private _form:FormBuilder){
    this.contactForm = this._form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      idType: [''],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  ngOnInit(): void {
    /**
     * Con las siguientes lineas de codigo, deshabilito el campo
     * name para que no se pueda escribir, en caso de que el nombre
     * ya venga loggeado desde otro componente y no quiero que el usuario
     * tenga acceso a cambiarlo.
     */
    //this.contactForm.get('name')?.setValue(this.activeUser); //este es el comando caundo solo una variable se necesita bloquear

    // Para deshabilitar varios campos
    // this.contactForm.patchValue({
    //   name: this.activeUser.name,
    //   lastName: this.activeUser.lastName,
    //   id: this.activeUser.id,
    // })
    // this.contactForm.get('name')?.disable();
    // this.contactForm.get('lastName')?.disable();
    // this.contactForm.get('id')?.disable();

    //SUSCRIPCIONES
    /**
     * valueChanges hace el mismo efecto que el 
     * e.target.value en React y es que va tomando
     * los cambios en los campos a medida que hay un
     * cambio, como agregar o borrar una letra en el field
     * Esta es una herramienta my poderosa de Angular
     * pues podria incluso hacer cambios radicales de la 
     * UI dependiendo de opcones elegidas por el usuario
     */
    // this.contactForm.valueChanges.subscribe(valor => {
    //   console.log(valor);
    // })

    this.contactForm.get('idType')?.valueChanges.subscribe(value => {
      this.showId = value != '';
      this.typeOfId = value;
    })
  }

  ngOnDestroy():void {
    console.log('Component destroyed!!');
  }

  submit() {
    console.log(this.contactForm);
  }

  hasErrors(controlName:string, errorType:string){
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
  }

  /**
   * De esta manera se genera la logica de 
   * un formulario basado en template HTML
   */
  // public user:any = {
  //   name: "",
  //   email: ""
  // };

  // submit() {
  //   console.log(this.user);
  // }
}
