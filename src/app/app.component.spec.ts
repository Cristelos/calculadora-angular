import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be 3', () => {
    // A = Arrange o arreglar
    const num1 = 1;
    const num2 = 2;

    // A = Act o actuar
    const result = num1 + num2;

    // A = Assert o afirmaciones ===> esto es lo que serían los pasos de la prueba
    // if (result !== 3) {
    //   throw new Error('It´s not 3');
    // } => esta sería una manera demasiado rebuscada de hacer la verificación

    expect(result).toBe(3); // => esta es la forma más organizada
  });

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
    // expect(compiled.querySelector('h1')?.textContent).toContain(
    //   'Hello, zoneless-calculator'
    // );
  });

  it('should render router-outlet wrapper with css classes', () => {
    const divElement = compiled.querySelector('div');
    const mustHaveClasses =
      'min-w-screen min-h-screen bg-slate-600 flex items-center justify-center px-5 py-5'.split(
        ' '
      );
    const divClasses = divElement?.classList.value.split(' ');

    //expect(divElement?.classList.value).toBe(mustHaveClasses);
    expect(divElement).not.toBeNull();

    // divElement?.classList.forEach( className => {
    //   expect(mustHaveClasses).toContain(className);
    // });

    mustHaveClasses.forEach((className) => {
      expect(divClasses).toContain(className);
    });
  });

  it('should contain the "buy me a beer" link', () => {
    // anchorElement?.title = 'Buy me a beer';
    // anchorElement?.getAttribute(href) = 'https://www.buymeacoffee.com/scottwindon';

    const anchor = compiled.querySelector('a');

    expect(anchor).not.toBeNull();

    expect(anchor?.title).toBe('Buy me a beer');
    expect(anchor?.getAttribute('href')).toBe(
      'https://www.buymeacoffee.com/scottwindon'
    );
  });
});
