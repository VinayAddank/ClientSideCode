import { Injectable } from '@angular/core';
import { HttpModule,Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';
import { SERVER_API_URL } from '../../app.constants';
import 'rxjs/add/observable/throw'; 
@Injectable()
export class MapService {

  constructor(private http:Http) {  }
	
	loginDealer(data){
		var json = JSON.stringify({'username':data.username,'password':data.password});
		var params = json;
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		//headers.append('accept', 'application/json');
		
		return this.http.post(SERVER_API_URL + 'api/authenticate',params,
		{
			headers:headers
		}).map(res => res.json());
		
	}	
}