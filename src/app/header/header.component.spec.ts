import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HeaderComponent>;

  // * We use beforeEach so our tests are run in isolation
  beforeEach(() => {
    TestBed.configureTestingModule({
      // * here we configure our testing module with all the declarations,
      // * imports, and providers necessary to this component
      imports: [CommonModule],
      providers: [],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; // The component instantiation 
    element = fixture.nativeElement; // The HTML reference
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check interpolated title element', () => {
    // * arrange
    const title = 'Baked With Love';
    const titleElement = element.querySelector('.hero-title');
    // * act
    component.title = title;
    fixture.detectChanges(); 
    // * assert
    expect(titleElement.textContent).toContain(title);
  });
});