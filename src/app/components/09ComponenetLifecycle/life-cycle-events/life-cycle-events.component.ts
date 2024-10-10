import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle-events',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-events.component.html',
  styleUrl: './life-cycle-events.component.css',
})
export class LifeCycleEventsComponent
  implements
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  lifeCycle: any[] = [
    {
      interface: 'OnInit',
      description: [
        'Called after loading a componennt',
        "Used to trigger Api's",
      ],
    },
    {
      interface: 'Docheck',
      description: ['when we work on change detection'],
    },
    {
      interface: 'AfterContentInit',
      description: [
        'if we integrate external video/audio/images then after initialization',
      ],
    },
    {
      interface: 'AfterContentChecked',

      description: [
        'if we integrate external video/audio/images then after checking',
      ],
    },
    {
      interface: 'AfterViewInit',

      description: [
        'after component or reusable componenet initialization this will trigger',
      ],
    },
    {
      interface: 'AfterViewCheked',

      description: [
        'after component or reusable componenet after checking this will trigger',
      ],
    },
    {
      interface: 'OnDestroy',

      description: [
        'mainly used to unsubscribe api calls',
        'performing distroy on page / redirect to another page this will trigger',
      ],
    },
    {
      interface: 'OnChanges',

      description: [
        'mainly used to get if any changes is happed',
        'ngOnCganges(changes: SimpleChange):void{}'
      ],
    },
  ];
  constructor() {
    console.log('constrctor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
