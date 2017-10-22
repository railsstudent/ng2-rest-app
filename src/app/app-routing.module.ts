import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturedItemComponent } from './items/featured-item/featured-item.component';
import { FeaturedWidgetComponent } from './widgets/featured-widget/featured-widget.component';
import { ReviewComponent } from './items/review/review.component';
import { ReviewItemComponent } from './items/review/review-item/review-item.component';

const routes: Routes = [
  {path: '',      redirectTo: '/items', pathMatch: 'full' },
  {path: 'items', component: ItemsComponent, children: [
    {path: 'featured/:id', component: FeaturedItemComponent}
  ]},
  {path: 'widgets', component: WidgetsComponent, children: [
    {path: 'featured/:id', component: FeaturedWidgetComponent}
  ]},
  {path: 'reviews', component: ReviewComponent, children: [
    {path: 'featured/:id', component: ReviewItemComponent}
  ]},
  {path: '**',     redirectTo: '/items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2RestAppRoutingModule { }
