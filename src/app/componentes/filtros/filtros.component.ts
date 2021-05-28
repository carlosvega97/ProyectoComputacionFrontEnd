import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @ViewChild('sidebar')
  public sidebar: SidebarComponent;
  public closeOnDocumentClick: boolean = false;

  // only for sample browser use 
  constructor( ) {
        
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    // open new tab
    newTabClick(): void {
        let URL = location.href.replace(location.search,'');
        document.getElementById('newTab')!.setAttribute('href', URL.split('#')[0] + 'sidebar/default');
    }
    positionChange(args: any) {
        this.sidebar.position = args.value == "left" ? "Left" : "Right";
        if(args.value == "right"){
            document.getElementById("hamburger")!.className += " e-rtl";
        }
        if(args.value == "left"){
            document.getElementById("hamburger")!.classList.remove("e-rtl");
        }
    }
    toggleClick() {
        this.sidebar.toggle();
    }
    closeClick() {
        this.sidebar.hide();
    }
    openClick() {
        this.sidebar.show();
    }
    //To hide the sidebar element skelton during the page load by setting the visibity style when the control is created.
    onCreated(e: any): void {
        this.sidebar.element.style.visibility = 'visible';
    }

}
