import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainapp-component',
  template: `
    <h1>The NGRX Application</h1>
    <table class="table table-bordered table-striped">
        <tr>
          <td>
            <a>Product List</a>
          </td>
        </tr>
    </table>
  `
})

export class MainAppComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
