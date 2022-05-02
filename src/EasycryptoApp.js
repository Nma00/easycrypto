import './EasycryptoApp.css';

const TRANSAK_API_KEY = 'ff5d9cc4-647a-493e-a764-4434e063e7be';

const TRANSAK_PARAMS = {
    //widgetHeight: '625px',
    //widgetWidth: '500px',
    // Examples of some of the customization parameters you can pass
    //defaultCryptoCurrency: '[DEFAULT_CRYPTO]', // Example 'ETH'
    //walletAddress: '', // Your customer's wallet address
    themeColor: '198754', // App theme color
    //fiatCurrency: '', // If you want to limit fiat selection eg 'USD'
    //email: '', // Your customer's email address
    //redirectURL: '',
    //hideMenu: true,
};
const SCREEN_TITLE = 'Buy cryptos in a few clicks';
const BANNER = 'Easy Crypto, a quick and easy way to purchase cryptos.';
/*
 build url avec TRANSAK_OPT
*/
const IFRAME_HEIGHT = 620;
const IFRAME_WIDTH = 500;
const IFRAME_URL = `https://staging-global.transak.com?apiKey=${TRANSAK_API_KEY}&exchangeScreenTitle=${encodeURIComponent(SCREEN_TITLE)}&isFeeCalculationHidden=true&themeColor=198754&hideMenu=true`;
const IFRAME_STYLE = {
  display: 'block', 
  width: '100%', 
  maxHeight: IFRAME_HEIGHT + 'px', 
  maxWidth: IFRAME_WIDTH + 'px'
}

//https://staging-global.transak.com/?apiKey=[insert your staging API key here]&redirectURL=https://transak.com&cryptoCurrencyList=ETH,DAI,USDT&defaultCryptoCurrency=DAI&walletAddress=0x2dd94DC4b658F08E33272e6563dAb1758c10b1de&disableWalletAddressForm=true&exchangeScreenTitle=My%20dApp%20is%20the%20best&isFeeCalculationHidden=true

function EasycryptoApp() {
  return (
    <div className="d-flex justify-content-center">
        <iframe height={IFRAME_HEIGHT} title="Transak On/Off Ramp Widget"
        src={IFRAME_URL} 
        frameBorder="no" allowtransparency="true" allowFullScreen="" 
        style={IFRAME_STYLE}>
        </iframe>

        {/* 
        <iframe height="625" title="Transak On/Off Ramp Widget"
        src="https://staging-global.transak.com?apiKey=[YOUR_STAGING_API_KEY]&[QUERY_PARAMETERS]" 
        frameborder="no" allowtransparency="true" allowfullscreen="" 
        style="display: block; width: 100%; max-height: 625px; max-width: 500px;">
        </iframe>
        */}
    </div>
  );
}

export default EasycryptoApp;
