import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: '',
    component: CompanyComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    children:[
      {
        path: 'create',
        component: AddproductComponent
      },
      {
        path: 'edit/:id',
        component: AddproductComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
