import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: any[], sortType: string): any[]{
     if (!products || !sortType) return products;

    let sorted = [...products]; // اعملي نسخة عشان متعدليش الأصل

    switch (sortType) {
      case 'priceLow':
        return sorted.sort((a, b) => a.price - b.price);
      case 'priceHigh':
        return sorted.sort((a, b) => b.price - a.price);
      case 'nameAZ':
        return sorted.sort((a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
      default:
        return products;
    }
  }
  }


