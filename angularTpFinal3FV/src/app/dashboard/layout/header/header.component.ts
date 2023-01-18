import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  @Output() toggleSidebar = new EventEmitter();
  public user: User | null = null;
  private destroyed$ = new Subject();
  constructor(
    private readonly sessionService: SessionService,
    public readonly authService: AuthService
  ) {
    this.sessionService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) this.user = user;
      });
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
