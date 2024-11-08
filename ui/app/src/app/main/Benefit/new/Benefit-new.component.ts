import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Benefit-new',
  templateUrl: './Benefit-new.component.html',
  styleUrls: ['./Benefit-new.component.scss']
})
export class BenefitNewComponent {
  @ViewChild("BenefitForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}