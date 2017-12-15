import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import {Message} from './message';


describe('MessagesService', () => {
  let message1: Message;
  let message2: Message;
  let service;
  beforeEach(() => {
    message1 = new Message(7, 'Test1');
    message2 = new Message(9, 'Test2');
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
    service = TestBed.get(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message to the messages array', () => {
    service.postMessage(message1);
    expect(service.getmessageById(1)).toEqual(message1);
  });

  it('should delete a message in the messages array by id', () => {
    service.postMessage(message1);
    service.postMessage(message2);
    service.deleteMessageById(1);
    expect(service.getmessageById(1)).not.toBeDefined('Still here');
  });

  it('should update message by id given', () => {
    service.postMessage(message1);
    service.updateMessageById(1, "Updated message");
    expect(service.getmessageById(1).content).toEqual("Updated message");
  });

  it('should get all messages in the messages array', () => {
    service.postMessage(message1);
    service.postMessage(message2);
    expect(service.getAllmessages().length).toEqual(2);
  });

  it('return the last message posted', () => {
    service.postMessage(message1);
    service.postMessage(message2);
    expect(service.getLastMessage()).toEqual(message2);
  })


});
