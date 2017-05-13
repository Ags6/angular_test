import { Injectable } from '@angular/core';
import { ProviderBO } from '../business-objects/provider-bo';
import { PROVIDERS } from '../test-data/mock-providers';
import { Http, HttpModule,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Injectable()
export class ProviderService {
	//'http://northwind.servicestack.net/customers?format=json';//
	//private provUrl = 'https://sap*****************';
	constructor(
		private http: Http
	) { }
	getProviders(): Promise<ProviderBO[]> {
		//console.log(this.http, "testing HTTP object ***********###########");
		//let headers = new Headers({ 'Authorization': 'Basic ***************' });
		// let headers = new Headers({ 'Content-Type': 'application/json' });
		//headers.append('Authorization', 'Basic TkpKNzE5Omlsb3ZlbXl3aWZFKg==');
		// headers.append('Access-Control-Allow-Origin', '*');
		// console.log(headers, "http headers ***********");
  		// let options = new RequestOptions({ headers: headers });
		// return this.http.get(this.provUrl, options).toPromise()
		// 	.then(this.extractData)
		// 	.catch(this.handleError);
		 return Promise.resolve(PROVIDERS);
	}

		private extractData(res: Response) {
				let body = res.json();
				return body.data || {};
			}		

		private handleError (error: Response | any) {
			// In a real world app, you might use a remote logging infrastructure
			let errMsg: string;
			if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
			} else {
			errMsg = error.message ? error.message : error.toString();
			}
			//console.error(this.http,"HTTP object ***8");
			return Observable.throw(errMsg);
		}						
		// var headers = new Headers();
		// headers.append('Authorization', 'Basic TkpKNzE5Omlsb3ZlbXl3aWZFKg==');

		// var options = new RequestOptions({
		// 	method: RequestMethod.Get,
		// 	url: 'https://sap-ciq-as01.csda.gov.au:8081/sap/opu/odata/sap/ZNDIS_PROVIDER_FINDER_SRV/XsProviders?$orderby=Distance%20asc&$filter=Longitude%20eq%20149.09515380859375M%20and%20Latitude%20eq%20-35.36331558227539M%20and%20Distance%20lt%2050.0M&$top=10&$skip=0&$inlinecount=allpages',
		// 	headers: headers,
		// 	withCredentials: true
		// });
		// var req = new Request(options);
		
		// console.log(options.headers, "http headers ***********");
		// console.log(req, "http req *%%%%%%%");

		// debugger;
		// var prov = this.http.request(req).toPromise()
		// 	.then(response => {
		// 		console.log(response.json(), "testing HTTP RETURN***********###########");
		// 		return response.json();
				
		// 	});

//***************************** */

		// var prov = this.http.get('https://sap-ciq-as01.csda.gov.au:8081/sap/opu/odata/sap/ZNDIS_PROVIDER_FINDER_SRV/XsProviders?$orderby=Distance%20asc&$filter=Longitude%20eq%20149.09515380859375M%20and%20Latitude%20eq%20-35.36331558227539M%20and%20Distance%20lt%2050.0M&$top=10&$skip=0&$inlinecount=allpages'
		// 	, {
		// 		headers: headers//{ 'Authorization', 'Basic bmpqNzE5Omlsb3ZlbXl3aWZFOCo='}
		// 	}).toPromise()
		// 	.then(response => {
		// 		return response.json();
		// 	});

		// console.log(prov, "testing HTTP Object***********###########");
		// return prov;

//************** */
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://sap-ciq-as01.csda.gov.au:8081/sap/opu/odata/sap/ZNDIS_PROVIDER_FINDER_SRV/XsProviders?%24orderby=Distance%20asc&%24filter=Longitude%20eq%20149.09515380859375M%20and%20Latitude%20eq%20-35.36331558227539M%20and%20Distance%20lt%2050.0M&%24top=10&%24skip=0&%24inlinecount=allpages",
//   "method": "GET",
//   "headers": {
//     "authorization": "Basic TkpKNzE5Omlsb3ZlbXl3aWZFKg==",
//     "cache-control": "no-cache",
//     "postman-token": "f4433f87-81d7-b609-c1a4-75ae811c62e0"
//   }
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
// 		return prov;


		// return Promise.resolve(PROVIDERS);
	// }

	getProvider(id: number): Promise<ProviderBO> {
	  return this.getProviders()
         .then(providers => providers.find(provider => provider.id === id));
	}

}
