<<<<<<< Updated upstream
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

=======
import { ComponentFixture, TestBed } from '@angular/core/testing';
>>>>>>> Stashed changes
import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

<<<<<<< Updated upstream
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
=======
  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
>>>>>>> Stashed changes

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
