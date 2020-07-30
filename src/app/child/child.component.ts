import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ElementRef, ViewChild, ContentChild } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy , OnChanges, DoCheck,   AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {

  message:string ="how are you?"
  @ViewChild("txtref") txtref: ElementRef


  @Input("val1")
  public val1 : string

  @Input("val2")
  public val2 : any

  constructor() {

    console.log ("inside constructor")

  }




  ngOnInit(): void {

    console.log ("inside init")

  }

  ngOnDestroy (): void {

    console.log ("inside destroy")

  }

  ngOnChanges( changes :SimpleChanges ) : void {
    console.log ( changes)

    let change =changes.val1

    //if (change.currentValue != undefined && typeof change.currentValue ==='string'){
    //  this.val1= change.currentValue + " ?"

    //}

    console.log ("inside changes")
  }

  ngDoCheck (){

    console.log ("inside docheck")
  }


  ngAfterContentChecked() {
    console.log('------ngAfterContentChecked-----');
  }

  ngAfterContentInit() {
    console.log('------ngAfterContentInit-----');
  }


ngAfterViewInit() {
   //this.txtref.nativeElement.focus()
    console.log("ngAfterViewInit");
}

ngAfterViewChecked() {
    this.txtref.nativeElement.focus()
    console.log("ngAfterViewChecked");
}


}
