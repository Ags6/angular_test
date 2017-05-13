import { ProviderServiceTO } from './provider-service-to';
import { ProviderPromotionTO } from './provider-promotion-to';
import { ProviderHoursTO } from './provider-hours-to';
import { ProviderBenefits } from './provider-benefits';

export interface ProviderBO {
	id: number;
	lat: number;
	lng: number;
	benefits: ProviderBenefits[];
	//testing
	lat1: number;
	lng1: number;
	lat2: number;
	lng2: number;
	name: string;
	imageSt: string;
	image: string;
	desc: string;
	services:ProviderServiceTO[];
	promotions:ProviderPromotionTO[];
	openingHours: ProviderHoursTO;
}

