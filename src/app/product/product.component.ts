import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productForm: FormGroup;
    public isFormSubmitted: boolean;
    public productId: Number;
    fileToUpload: File = null;
 
 
  constructor(
    private _fb: FormBuilder,
  ) 
  { }
  imageUrl: string = "/assets/images/noimage.png";
  ngOnInit() {
    this.productForm = this._fb.group({
      id: [''],
      prodName: ['', Validators.required],
      prodDesc: ['', Validators.required],
      prodQty:['', Validators.required],
      prodPrice:['', Validators.required],
     image: [, Validators.required]
  });
  }
  onSubmit(value)
  {
    console.log("check prod data",value)
  }
  handleFileInput(file: FileList)
  {
    console.log("check image data",file)
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      console.log(this.imageUrl)
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  
}
