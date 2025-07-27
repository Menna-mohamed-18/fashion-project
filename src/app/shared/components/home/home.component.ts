import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Iproduct } from '../../interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { TermtextPipe } from '../../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../../core/pipes/search.pipe';
import { SortPipe } from '../../../core/pipes/sort.pipe';
import { NgxSpinnerService } from 'ngx-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  imports: [FormsModule , RouterLink , TermtextPipe , SearchPipe , SortPipe , CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
text:string = '';
products:Iproduct[]=[];
sortOption: string = '';


private readonly productsService = inject(ProductsService);

 customMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    autoplay:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: true
  }

getProductsData():void{
      this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res);
        this.products=res;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
}



ngOnInit(): void {
this.getProductsData();
}

}
