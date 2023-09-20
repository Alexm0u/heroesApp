import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'MARVEL Comics', desc: 'Marvel - Comics'},
    // { id: 'Seinen', desc: 'Seinen comic'},
    // { id: 'Shonen', desc: 'Shonen jump'}
  ]

}
