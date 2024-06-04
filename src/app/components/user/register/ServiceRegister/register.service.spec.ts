import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService]
    });

    service = TestBed.inject(RegisterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call register API and return success', () => {
    const dummyUser = {
      firstname: '',
      lastname: '',
      email: '',
      numberPhone: '',
      password: ''
    };
    const response = { success: true };

    service.register(dummyUser).subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne('http://localhost:8088/auth/register');
    expect(req.request.method).toBe('POST');
    req.flush(response);
  });

  it('should get token from localStorage', () => {
    const token = '12345';
    spyOn(localStorage, 'getItem').and.callFake(() => token);

    expect(service.getToken()).toBe(token);
  });

  it('should set token in localStorage', () => {
    const token = '12345';
    spyOn(localStorage, 'setItem');

    service.setToken(token);
    expect(localStorage.setItem).toHaveBeenCalledWith('token', token);
  });

  it('should remove token from localStorage', () => {
    spyOn(localStorage, 'removeItem');

    service.removeToken();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
