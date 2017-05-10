import { Injectable } from '@angular/core';
import { ProviderBO } from '../business-objects/provider-bo';
import { PROVIDERS } from '../test-data/mock-providers';

@Injectable()
export class ProviderService {

	getProviders(): Promise<ProviderBO[]> {
		return Promise.resolve(PROVIDERS);
	}

	getProvider(id: number): Promise<ProviderBO> {
	  return this.getProviders()
         .then(providers => providers.find(provider => provider.id === id));
	}

}
