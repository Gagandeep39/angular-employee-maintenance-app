import { ManagerInfoPipe } from './manager-info.pipe';

describe('ManagerPipe', () => {
  it('create an instance', () => {
    const pipe = new ManagerInfoPipe();
    expect(pipe).toBeTruthy();
  });
});
