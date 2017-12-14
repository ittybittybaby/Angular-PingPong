import {Message} from './message';


describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message(9, 'What is good my G?')).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const message = new Message(9, 'What is good my G?');
    expect(message.content).toEqual('What is good my G?');
    expect(message.userId).toEqual(9);
  });
});
