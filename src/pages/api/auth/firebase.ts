const firebaseConfig = {
	apiKey: 'AIzaSyDl7IP41Si0gaP9zcOm9mLArQJjjWfGDiQ',
	authDomain: 'osid-hackathon.firebaseapp.com',
	projectId: 'osid-hackathon',
	storageBucket: 'osid-hackathon.appspot.com',
	messagingSenderId: '480985241098',
	appId: '1:480985241098:web:35602d43ed01e1f5a0f1f3',
	measurementId: 'G-3GRK7Y17MH',
};

import { initializeApp } from 'firebase/app';

export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
	return app;
};
