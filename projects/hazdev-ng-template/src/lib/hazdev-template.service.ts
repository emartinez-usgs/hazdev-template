import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HazdevNgTemplateService {
  mobileEmitter = new BehaviorSubject(null);

  emitMobileEvent(isMobile: boolean) {
    this.mobileEmitter.next(isMobile);
  }
}
