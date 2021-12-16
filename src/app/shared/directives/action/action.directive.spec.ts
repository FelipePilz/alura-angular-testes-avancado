import { ActionDirectiveModule } from './action.module';
import { TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
describe(ActionDirective.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionDirectiveModule],
    }).compileComponents();
  });
});
