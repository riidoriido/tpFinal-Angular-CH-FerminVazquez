import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdMockService, Product } from '../../prod-mock.service';

@Component({
  selector: 'app-prod-mock-page',
  templateUrl: './prod-mock-page.component.html',
  styleUrls: ['./prod-mock-page.component.scss'],
})
export class ProdMockPageComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(public prodMockService: ProdMockService) {}
  ngOnInit(): void {
    this.prodMockService.loadProducts();
  }

  createProduct() {
    if (this.form.valid) {
      this.prodMockService.createProduct(
        this.form.value as Pick<Product, 'name' | 'description'>
      );
    } else {
      alert('El formulario es invalido');
    }
  }
}
