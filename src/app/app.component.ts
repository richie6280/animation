import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const fadeInOut = trigger('fadeInOut', [
  // state('fadeIn', style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10'})),
  // state('fadeOut', style({ opacity: 0, transform: 'translateY(-200px)', zIndex: '-1'})),
  // transition('fadeIn => fadeOut', [animate('.5s ease')]),
  // transition('fadeOut => fadeIn', [animate('.5s ease')]),

  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-500px)', zIndex: '-1' }),
    animate('.5s ease', style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' }),
    animate('.5s ease', style({ opacity: 0, transform: 'translateY(-500px)', zIndex: '-1' }))
  ]),


  // transition(':increment', [
  //   // query(':enter', [
  //     style({ opacity: 0, transform: 'translateY(-200px)', zIndex: '-1' }),
  //     // stagger(50, [
  //     //   animate('.5s ease', style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' })),
  //     // ]),
  //   // ], { optional: true })
  // ]),
  // transition(':decrement', [
  //   // query(':leave', [
  //     style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' }),
  //     // stagger(50, [
  //     //   animate('.5s ease', style({ opacity: 0, transform: 'translateY(-200px)', zIndex: '-1' })),
  //     // ]),
  //   // ], { optional: true }),
  // ]),

])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})

export class AppComponent {
  title = 'animation';

  // public isShown: boolean = false;
  // public pageNumber: number = 1;
  // public lastPage: number = 5;

  // public pages = [
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 5 }
  // ]

  public step: number = 1;
  public lastPage: number = 3;

  // fadeInOut() {
  //   this.isShown = !this.isShown;
  // }

  // nextPage() {
  //   if (this.pageNumber === this.lastPage) return;
  //   this.pageNumber += 1;
  // }

  // previousPage() {
  //   if (this.pageNumber === 1) return;
  //   this.pageNumber -= 1;
  // }

  // ngOnInit() {
  //   this.getStepCondition(this.step);
  // }

  isStep1: boolean = true;
  isStep2: boolean = false;
  isStep3: boolean = false;

  imgSrc: any;

  assetsImgSrc = {
    pageStep1: {
      icon1: '../assets/shopping/icon:step1-2.png',
      icon2: '../assets/shopping/icon:step2-1.png',
      icon3: '../assets/shopping/icon:step3-1.png',
      step1: '../assets/shopping/process:step1-1.png',
      step2: '../assets/shopping/process:step2-3.png',
      step3: '../assets/shopping/process:step3-3.png',
    },
    pageStep2: {
      icon1: '../assets/shopping/icon:step1-1.png',
      icon2: '../assets/shopping/icon:step2-2.png',
      icon3: '../assets/shopping/icon:step3-1.png',
      step1: '../assets/shopping/process:step1-2.png',
      step2: '../assets/shopping/process:step2-1.png',
      step3: '../assets/shopping/process:step3-3.png',
    },
    pageStep3: {
      icon1: '../assets/shopping/icon:step1-1.png',
      icon2: '../assets/shopping/icon:step2-3.png',
      icon3: '../assets/shopping/icon:step3-2.png',
      step1: '../assets/shopping/process:step1-2.png',
      step2: '../assets/shopping/process:step2-2.png',
      step3: '../assets/shopping/process:step3-1.png',
    },
  }

  nextPage() {
    if (this.step === this.lastPage) return;
    this.step += 1;
    this.getStepCondition(this.step);
  }
  
  previousPage() {
    if (this.step === 1) return;
    this.step -= 1;
    this.getStepCondition(this.step);
  }

  getStepCondition(step: number): void {
    step === 1 ? this.isStep1 = true : this.isStep1 = false;
    step === 2 ? this.isStep2 = true : this.isStep2 = false;
    step === 3 ? this.isStep3 = true : this.isStep3 = false;

  //  if (step === 1) this.imgSrc = this.assetsImgSrc.pageStep1;
  //  if (step === 2) this.imgSrc = this.assetsImgSrc.pageStep2;
  //  if (step === 3) this.imgSrc = this.assetsImgSrc.pageStep3;
  }


}
