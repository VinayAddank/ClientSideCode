import { Injectable } from '@angular/core';
import { HttpModule,Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }
	
	loginDealer(data){
		var json = JSON.stringify({'username':data.username,'password':data.password});
		var params = json;
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		//headers.append('accept', 'application/json');
		
		return this.http.post('http://10.10.11.190:8080/api/authenticate',params,
		{
			headers:headers
		}).map(res => res.json());
		
	}	
}
