import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Iproduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit{

  private readonly _ActivatedRoute= inject(ActivatedRoute)
  private readonly productsService=inject(ProductsService)


  detailsProduct:Iproduct|null=null;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(p)=>{
      let idProd = p.get('id') ; 
          console.log(p.get('id'));


          this.productsService.getSpecificProducts(idProd).subscribe({
            next:(res)=>{
              console.log(res);
              this.detailsProduct=res;
            },
            error:(err)=>{
              console.log(err);
              
            }
          })
          
        }
      })
  }
}
