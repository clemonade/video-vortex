import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ChipComponent } from "./chip.component";
import { DEFAULT_RUNTIME } from "../../../core/constants/app.constant";

describe("ChipComponent", () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    fixture.componentRef.setInput("action", DEFAULT_RUNTIME);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
