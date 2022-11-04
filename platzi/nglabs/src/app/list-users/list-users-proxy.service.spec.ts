import { HttpClientModule, } from '@angular/common/http';

import { inject, TestBed, async } from '@angular/core/testing';

import { ListUsersProxyService } from './list-users-proxy.service';


describe('ListUsersProxyServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [ListUsersProxyService]
    })
  });

  it('Deberia ser creado', inject([ListUsersProxyService], (service: ListUsersProxyService) =>{
    expect(service).toBeTruthy()
  }))

  it('deberia' , inject([ListUsersProxyService], (service:ListUsersProxyService)=>{
    expect(service).toBeFalsy();
  }))

  it ('should get users', async(() => {
    const service: ListUsersProxyService = TestBed.get(ListUsersProxyService);
    service.getUsers().subscribe(
      (response) => expect(response.json()).not.toBeNull(),
      (error) => fail(error)
    );


  }));
})


