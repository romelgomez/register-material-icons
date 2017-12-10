import {Component} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [ MatIconRegistry ]
})
export class AppComponent {

  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg
    .addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg'))
    .addSvgIcon('google', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/google.svg'))
    .addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/facebook.svg'))
    .addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/twitter.svg'));
  }

}
