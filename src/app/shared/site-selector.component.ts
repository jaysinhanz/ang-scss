import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-site-selector',
  templateUrl: './site-selector.component.html',
  styleUrls: ['./site-selector.component.scss']
})
export class SiteSelectorComponent implements OnInit {
  siteForm: FormGroup;

  ngOnInit() {}

 constructor (fb: FormBuilder){
    this.siteForm = fb.group({
        siteName: 'jay'
    })
  }
}
