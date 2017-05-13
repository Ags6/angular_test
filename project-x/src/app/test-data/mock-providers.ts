import { ProviderBO } from '../business-objects/provider-bo';

export const PROVIDERS: any = [
  { id: 11,
  	lat:-35.420607,
  	lng:149.065887,
	  benefits:[
		{ lat: -35.421607,lng:149.065887 },
		{ lat: -35.422607,lng:149.066887 },
		{ lat: -35.423607,lng:149.067887 }
	  ],	
	lat1: -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
  	name: 'ActiPhysio',
	desc: 'Top quality Physio therapy',
	imageSt: '../assets/ActiPhysio1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-P-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 4:30 PM',
				   Tue:'8:30 AM To 4:30 PM',
				   Wed:'8:30 AM To 4:30 PM',
				   Thu:'8:30 AM To 4:30 PM',
				   Fri:'8:30 AM To 4:30 PM',
				   Sat:'8:30 AM To 12:30 PM',
				   Sun:'Closed'}},
  { id: 12,
	lat:-35.420807,
	lng:149.061007,
	benefits:[
		{ lat: -35.421807,lng:149.062007 },
		{ lat: -35.422807,lng:149.063007 },
		{ lat: -35.423807,lng:149.064007 }
	  ],
	lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,

	name: 'HandyWorks',
	desc: 'Top quality Physio therapy for your hands.',
	imageSt: '../assets/HandyWorks1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-H-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}],
	promotions: [{name:'Hand Pain relief massage - $10 off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:00 AM To 4:00 PM',
				   Tue:'8:00 AM To 4:00 PM',
				   Wed:'8:00 AM To 4:00 PM',
				   Thu:'8:00 AM To 4:00 PM',
				   Fri:'8:00 AM To 4:00 PM',
				   Sat:'Closed',
				   Sun:'Closed'}},
  { id: 13,
	lat:-35.421257,
	lng:149.065867,
	benefits:[
		{ lat: -35.421257,lng:149.065867 },
		{ lat: -35.421257,lng:149.065867 },
		{ lat: -35.421257,lng:149.065867 }
	  ],
	lat1: -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'SteelWheel Tuggeranong',
	desc: 'Best wheelchair and related accessories across Australia.',
	imageSt: '../assets/SteelWheel1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-W-icon.png',
	services: [{name:'Wheelchairs'}, {name:'Seats'}, {name:'Electronics'}],
	promotions: [{name:'Wheelchairs - 10% off'}],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'8:30 AM To 1:30 PM',
				   Sun:'Closed'}},
  { id: 14,
	lat:-24.420855,
	lng:119.066856,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'NeuroSpace',
	desc: 'NeuroSpace',
	imageSt: '../assets/NeuroSpace1.png',
	services: [{name:'Speech therapy'}, {name:'Vision therapy'}, {name:'Hearing therapy'}, {name:'Sensory issues relief'}],
	promotions: [],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'Closed',
				   Sun:'Closed'}},
  { id: 15,
	lat:-65.421721,
	lng:125.066756,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'Envision',
	desc: 'The best care your eyes have ever seen',
	imageSt: '../assets/Envision1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-E-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'Closed',
				   Sun:'Closed'}},
  { id: 16,
	lat:-35.239172,
	lng:149.062821,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'Envision Belconnen',
	desc: 'The best care your eyes have ever seen',
	imageSt: '../assets/Envision1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-E-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'Closed',
				   Sun:'Closed'}},
  { id: 17,
	lat:-35.415807,
	lng:149.069523,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'SteelWheel Dynama',
	desc: 'SteelWheel Dynama provider - Provides very good service',
	imageSt: '../assets/SteelWheel1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-W-icon.png',
	services: [{name:'Wheelchairs'}, {name:'Seats'}, {name:'Electronics'}],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'8:30 AM To 1:30 PM',
				   Sun:'Closed'}},
  { id: 18,
	lat:-35.404375,
	lng:149.078465,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'SteelWheel Oxley',
	desc: 'Best wheelchair and related accessories across Australia.',
	imageSt: '../assets/SteelWheel1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-W-icon.png',
	services: [{name:'Wheelchairs'}, {name:'Seats'}, {name:'Electronics'}],
	promotions: [{name:'Wheelchairs - 10% off'}],
	openingHours: {Mon:'8:30 AM To 4:30 PM',
				   Tue:'8:30 AM To 4:30 PM',
				   Wed:'8:30 AM To 4:30 PM',
				   Thu:'8:30 AM To 4:30 PM',
				   Fri:'8:30 AM To 4:30 PM',
				   Sat:'8:30 AM To 12:30 PM',
				   Sun:'Closed'}},
  { id: 19,
	lat:-35.414589,
	lng:149.079435,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'HandyWorks Oxley',
	desc: 'Top quality Physio therapy for your hands.',
	imageSt: '../assets/HandyWorks1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-H-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}],
	promotions: [{name:'Hand Pain relief massage - $10 off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:00 AM To 4:00 PM',
				   Tue:'8:00 AM To 4:00 PM',
				   Wed:'8:00 AM To 4:00 PM',
				   Thu:'8:00 AM To 4:00 PM',
				   Fri:'8:00 AM To 4:00 PM',
				   Sat:'Closed',
				   Sun:'Closed'}},
  { id: 20,
	lat:-35.417530,
	lng:149.067292,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'Physio Now',
	desc: 'Top quality Physio therapy',
	imageSt: '../assets/ActiPhysio1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-P-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 4:30 PM',
				   Tue:'8:30 AM To 4:30 PM',
				   Wed:'8:30 AM To 4:30 PM',
				   Thu:'8:30 AM To 4:30 PM',
				   Fri:'8:30 AM To 4:30 PM',
				   Sat:'8:30 AM To 12:30 PM',
				   Sun:'Closed'}},
  { id: 21,
	lat:-35.396988,
	lng:149.069960,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'ActiPhysio Kambah',
	desc: 'Top quality Physio therapy',
	imageSt: '../assets/ActiPhysio1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-P-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 4:30 PM',
				   Tue:'8:30 AM To 4:30 PM',
				   Wed:'8:30 AM To 4:30 PM',
				   Thu:'8:30 AM To 4:30 PM',
				   Fri:'8:30 AM To 4:30 PM',
				   Sat:'8:30 AM To 12:30 PM',
				   Sun:'Closed'}},
  { id: 22,
	lat:-35.420951,
	lng:149.099904,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'Envision Monash',
	desc: 'The best care your eyes have ever seen',
	imageSt: '../assets/Envision1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-E-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'Closed',
				   Sun:'Closed'}},
  { id: 23,
	lat:-35.353014,
	lng:149.090680,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'ActiPhysio Woden',
	desc: 'Top quality Physio therapy',
	imageSt: '../assets/ActiPhysio1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-P-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}, {name:'Backpain'}],
	promotions: [{name:'Massage services - 25% off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:30 AM To 4:30 PM',
				   Tue:'8:30 AM To 4:30 PM',
				   Wed:'8:30 AM To 4:30 PM',
				   Thu:'8:30 AM To 4:30 PM',
				   Fri:'8:30 AM To 4:30 PM',
				   Sat:'8:30 AM To 12:30 PM',
				   Sun:'Closed'}},
  { id: 24,
	lat:-35.275388,
	lng:149.130250,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'SteelWheel City',
	desc: 'Best wheelchair and related accessories across Australia.',
	imageSt: '../assets/SteelWheel1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-W-icon.png',
	services: [{name:'Wheelchairs'}, {name:'Seats'}, {name:'Electronics'}],
	promotions: [{name:'Wheelchairs - 10% off'}],
	openingHours: {Mon:'8:30 AM To 5:30 PM',
				   Tue:'8:30 AM To 5:30 PM',
				   Wed:'8:30 AM To 5:30 PM',
				   Thu:'8:30 AM To 5:30 PM',
				   Fri:'8:30 AM To 5:30 PM',
				   Sat:'8:30 AM To 1:30 PM',
				   Sun:'Closed'}},
   { id: 25,
	lat:-35.186143,
	lng:149.138045,
	benefits:[],
		lat1:   -35.421607,
	lng1: 149.065887,
	lat2: -35.422607,
	lng2: 149.066887,
	name: 'HandyWorks Gungahlin',
	desc: 'Top quality Physio therapy for your hands.',
	imageSt: '../assets/HandyWorks1.png',
	image: 'http://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/32/Letter-H-icon.png',
	services: [{name:'Sport Injuries'}, {name:'RSI'}],
	promotions: [{name:'Hand Pain relief massage - $10 off'}, {name:'Thermoskin Products - 10% off'}, {name:'RSI supports - 5% off'}],
	openingHours: {Mon:'8:00 AM To 4:00 PM',
				   Tue:'8:00 AM To 4:00 PM',
				   Wed:'8:00 AM To 4:00 PM',
				   Thu:'8:00 AM To 4:00 PM',
				   Fri:'8:00 AM To 4:00 PM',
				   Sat:'Closed',
				   Sun:'Closed'}}
];

