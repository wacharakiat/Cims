import { Component, OnInit } from '@angular/core';
import {DataTableModule, SharedModule} from 'primeng/primeng';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit  {
  title = 'app';
  products: any;
  selectedProduct: Product;

  displayDialog: boolean;
  newProduct: boolean;
  prod: Product[];


  constructor(private productservice: ProductService) {

  }

  ngOnInit(): void {
    this.productservice.getProduct().subscribe(
      (res: any): void => {
        console.log(res);
        this.products = res;
        this.selectedProduct = this.products[0];
      },
      (error: any) => console.log('Error'),
      () => console.log('Completed')
    );
  }

  showDialog() {
    this.newProduct = true;
    this.prod = new PrimeProd();
    this.displayDialog = true;
  }

  save() {
        let prodts = [...this.products];
        if(this.newProduct) {
          prodts.push(this.prod);
        } else {
          products[this.findSelectedProdIndex()] = this.prod;
        }

        this.products = products;
        this.prod = null;
        this.displayDialog = false;
    }

    delete() {
        let index = this.findSelectedProdIndex();
        this.products = this.products.filter((val,i) => i!=index);
        this.prod = null;
        this.displayDialog = false;
    }



  onRowSelect(event) {
    this.newProduct = false;
    this.products = this.cloneProd(event.data);
    this.displayDialog = true;
  }

  cloneProd(p: Product): Product {
    let prod = new PrimeProd();
    for(let prop in p) {
        prod[prop] = p[prop];
    }
    return prod;
}

  findSelectedProdIndex(): number {
    return this.products.indexOf(this.selectedProduct);
  }
}

/*tslint:disable:max-line-length*/
class PrimeProd implements Product {
  constructor(public fund_id, fundcode, prod_id?, prod_type?, prod_cat?, prod_title?, description?, age_from?, age_to?, grace?, wait?, exclusion_wait?,
    exclusion_cover?, exclusion?, admis?, cover?, period?, period_type?, followup?, followup_type?, capitation?, overall?, med_cover?, opd_cover?, ipd_cover?,
    er_cover?, prov_used?, template?, l_user?, l_update?, hb_exclusion_wait?, period_per?, followup_per?, wait_per?, exclusion_per?, chronic_wait?,
    chronic_per?, exclcover_per?, timestamp_column?, product_class?, prodcode?, prefix?, subfix?, note?
    ) {}
}
