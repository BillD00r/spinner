import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('SpinnerComponent', () => {

  describe ('SpinnerComponent spinning', () => {
    let component: SpinnerComponent;
    let fixture: ComponentFixture<SpinnerComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SpinnerComponent ],
        schemas: [NO_ERRORS_SCHEMA]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SpinnerComponent);
      component = fixture.componentInstance;
      component.done = false;
      fixture.detectChanges();
    });

    it('should spin and not display lines', () => {
      expect(fixture.debugElement.query(By.css("circle")).classes).toEqual({ spin: true });
      expect(fixture.debugElement.query(By.css("polyline"))).toBeNull();

    });
  });

  describe ('SpinnerComponent fail', () => {
    let component: SpinnerComponent;
    let fixture: ComponentFixture<SpinnerComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SpinnerComponent ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SpinnerComponent);
      component = fixture.componentInstance;
      component.done = true;
      component.success = false;
      fixture.detectChanges();
    });

    it('should be failure', () => {
      expect(fixture.debugElement.query(By.css("circle")).classes).toEqual({ failure: true, spinComplete: true });
      expect(fixture.debugElement.query(By.css("polyline")).classes).toEqual({ failure: true, iconComplete: true });

    });
  });

  describe ('SpinnerComponent success', () => {
    let component: SpinnerComponent;
    let fixture: ComponentFixture<SpinnerComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ SpinnerComponent ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(SpinnerComponent);
      component = fixture.componentInstance;
      component.done = true;
      component.success = true;
      fixture.detectChanges();
    });

    it('should be success', () => {
      expect(fixture.debugElement.query(By.css("circle")).classes).toEqual({ success: true, spinComplete: true });
      expect(fixture.debugElement.query(By.css("polyline")).classes).toEqual({ success: true, iconComplete: true });

    });
  });
});
