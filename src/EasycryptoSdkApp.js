import './EasycryptoSdkApp.css';
import transakSDK from '@transak/transak-sdk'

const TRANSAK_API_KEY = 'ff5d9cc4-647a-493e-a764-4434e063e7be';

let transak = new transakSDK({
    apiKey: TRANSAK_API_KEY,  // Your API Key
    environment: 'STAGING', // STAGING/PRODUCTION
    hostURL: window.location.origin,
    //widgetHeight: '625px',
    //widgetWidth: '500px',
    // Examples of some of the customization parameters you can pass
    //defaultCryptoCurrency: '[DEFAULT_CRYPTO]', // Example 'ETH'
    //walletAddress: '', // Your customer's wallet address
    //themeColor: '[COLOR_HEX]', // App theme color
    //fiatCurrency: '', // If you want to limit fiat selection eg 'USD'
    //email: '', // Your customer's email address
    //redirectURL: ''    
});

transak.init();

// To get all the events
transak.on(transak.ALL_EVENTS, (data) => {
		console.log(data)
});

// This will trigger when the user marks payment is made.
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    console.log(orderData);
    transak.close();
});

function EasycryptoSdkApp() {
  return (
    <div></div>
  );
}

export default EasycryptoSdkApp;
