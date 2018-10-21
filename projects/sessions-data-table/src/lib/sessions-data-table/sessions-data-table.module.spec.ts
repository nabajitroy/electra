import { SessionsDataTableModule } from './sessions-data-table.module';

describe('SessionsDataTableModule', () => {
  let sessionsDataTableModule: SessionsDataTableModule;

  beforeEach(() => {
    sessionsDataTableModule = new SessionsDataTableModule();
  });

  it('should create an instance', () => {
    expect(sessionsDataTableModule).toBeTruthy();
  });
});
