import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  public val1: string = "hello"

  public val2 = {

    name : "vijeesh"

  }

  isVisible : boolean = true

   public hideChild(): void {

    console.log  (" button clicked ")
    this.isVisible=false

  }

  public changeval (){
    this.val1 = " hi"
  }

  public changeval2 (){
    this.val2.name= "kumar"
  }


}
