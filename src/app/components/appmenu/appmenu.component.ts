import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.treeview').on('click', function () {
      if ($(this).attr('class') == 'menu-open active')
        $(this).attr('class', '')
      else
        $(this).attr('class', 'menu-open active')
    });

  }

}
