import {Component, OnInit} from '@angular/core';
import {CovidTracingService} from '../covid-tracing.service';
import {Tools} from '../base/Tools';

@Component({
  selector: 'app-covid-generate-key',
  templateUrl: './covid-generate-key.component.html',
  styleUrls: ['./covid-generate-key.component.css']
})
export class CovidGenerateKeyComponent implements OnInit {

  showOtpSection: any = false;
  keyClaimText: any;
  keyClaim: any;
  firstSection: any;
  secondSection: any;
  thirdSection: any;

  constructor(private httpService: CovidTracingService) { }

  ngOnInit(): void {
    this.initValue();
    this.setNewKeyValues('0000000000');
  }

  private initValue() {
    this.keyClaim = {
      firstSection: '',
      firstSectionCryllic: '',
      secondSection: '',
      secondSectionCryllic: '',
      thirdSection: '',
      thirdSectionCryllic: '',
    };
  }

  showOtp() {
    this.firstSection = '';
    this.secondSection = '';
    this.thirdSection = '';
    this.generateNewKey();
  }
  
  clearOtp() {
    this.firstSection = '';
    this.secondSection = '';
    this.thirdSection = '';
    this.keyClaim = {
      firstSection: '',
      firstSectionCryllic: '',
      secondSection: '',
      secondSectionCryllic: '',
      thirdSection: '',
      thirdSectionCryllic: '',
    };
    this.showOtpSection = false;
  }

  setAlphabet(keyClaim: any) {
    const claimLen = keyClaim.replace(' ', '').length;
    const subStrLen = 1;
    const tmpKeyClaim = {
      firstSection: '',
      firstSectionCryllic: '',
      secondSection: '',
      secondSectionCryllic: '',
      thirdSection: '',
      thirdSectionCryllic: ''
    };
    for (let i = 0; i < claimLen; i++){
      const char = keyClaim.substr(i, subStrLen);
      if (i < 3){
        tmpKeyClaim.firstSection += char;
        tmpKeyClaim.firstSectionCryllic += Tools.convertToCryllic(char) + ' ';
      } else if (i >= 3 && i < 6){
        tmpKeyClaim.secondSection += char;
        tmpKeyClaim.secondSectionCryllic += Tools.convertToCryllic(char) + ' ';
      } else {
        tmpKeyClaim.thirdSection += char;
        tmpKeyClaim.thirdSectionCryllic += Tools.convertToCryllic(char) + ' ';
      }
    }
    this.keyClaim = tmpKeyClaim;
  }


  generateNewKey() {
    this.httpService.generateNewKey({ code: '' }).subscribe(result => {
      this.showOtpSection = true;
      this.setNewKeyValues(result);
    }, error => {
      this.showOtpSection = false;
      console.log('error => ' + error);
    });
  }

  private setNewKeyValues(result) {
    this.keyClaimText = result;
    this.setAlphabet(result);
  }
}
