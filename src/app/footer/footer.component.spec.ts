import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<FooterComponent>;

  // * We use beforeEach so our tests are run in isolation
  beforeEach(() => {
    TestBed.configureTestingModule({
      // * here we configure our testing module with all the declarations,
      // * imports, and providers necessary to this component
      imports: [CommonModule],
      providers: [],
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check interpolated string copyright', () => {
    // * arrange
    const copyright = '©2020, WavetheGRAIN';
    const titleElement = element.querySelector('.copyright');
    // * act
    component.copyright = copyright;
    fixture.detectChanges(); 
    // * assert
    expect(titleElement.textContent).toContain(copyright);
  });
});
