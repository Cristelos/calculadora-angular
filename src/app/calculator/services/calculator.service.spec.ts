import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('calculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  beforeAll(() => {}); // antes de todas las pruebas

  afterEach(() => {}); // después de cada prueba

  afterAll(() => {}); // después de todas las pruebas

  it('should be created the service', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with default values', () => {
    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should set resultText, subResultText to "0" when C is pressed', () => {
    service.resultText.set('123');
    service.subResultText.set('456');
    service.lastOperator.set('*');

    service.constructNumber('C');

    expect(service.resultText()).toBe('0');
    expect(service.subResultText()).toBe('0');
    expect(service.lastOperator()).toBe('+');
  });

  it('should update resultText with number input', () => {
    service.constructNumber('1');
    expect(service.resultText()).toBe('1');

    service.constructNumber('4');
    expect(service.resultText()).toBe('14');
  });

  it('should handle operators correctly', () => {
    service.constructNumber('1');
    service.constructNumber('-');

    expect(service.lastOperator()).toBe('-');
    expect(service.subResultText()).toBe('1');
    expect(service.resultText()).toBe('0');
  });

  it('should calculate result correctly for addition', () => {
    service.constructNumber('1');
    service.constructNumber('+');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('3');
  });

  it('should calculate result correctly for subtraction', () => {
    service.constructNumber('5');
    service.constructNumber('-');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('3');
  });

  it('should calculate result correctly for divide', () => {
    service.constructNumber('4');
    service.constructNumber('/');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('2');
  });

  it('should calculate result correctly for divide', () => {
    service.constructNumber('4');
    service.constructNumber('÷');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('2');
  });

  it('should calculate result correctly for percentage', () => {
    service.constructNumber('4');
    service.constructNumber('%');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('42');
  });



  it('should calculate result correctly for multiplication', () => {
    service.constructNumber('4');
    service.constructNumber('*');
    service.constructNumber('2');
    service.constructNumber('=');

    expect(service.resultText()).toBe('8');
  });

  it('should handle decimal point correctly', () => {
    service.constructNumber('4');
    service.constructNumber('.');
    service.constructNumber('2');

    expect(service.resultText()).toBe('4.2');
    service.constructNumber('.');
    expect(service.resultText()).toBe('4.2');
  });

  it('should handle decimal point correctly starting with zero', () => {
    service.constructNumber('0');
    service.constructNumber('.');
    service.constructNumber('2');

    expect(service.resultText()).toBe('0.2');
    service.constructNumber('.');
    expect(service.resultText()).toBe('0.2');
  });

  it('should handle sign change correctly', () => {
    service.constructNumber('1');
    service.constructNumber('+/-');

    expect(service.resultText()).toBe('-1');
    service.constructNumber('+/-');
    expect(service.resultText()).toBe('1');
  });

  it('should handle backspace correctly', () => {
    service.resultText.set('123');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('12');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('1');

    service.constructNumber('Backspace');
    expect(service.resultText()).toBe('0');
  });

  it('should handle max length correctly', () => {
    for (let i = 0; i < 10; i++) {
      service.constructNumber('1');
    }

    expect(service.resultText().length).toBe(10);

    service.constructNumber('1');
    expect(service.resultText().length).toBe(10);

  });
});
