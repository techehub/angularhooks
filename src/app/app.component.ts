import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  message: string = ""

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
