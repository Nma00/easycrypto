const TRANSAK_API_KEY = 'ff5d9cc4-647a-493e-a764-4434e063e7be';

//const TRANSAK_PARAMS = {
    //widgetHeight: '625px',
    //widgetWidth: '500px',
    // Examples of some of the customization parameters you can pass
    //defaultCryptoCurrency: '[DEFAULT_CRYPTO]', // Example 'ETH'
    //walletAddress: '', // Your customer's wallet address
    //themeColor: '198754', // App theme color
    //fiatCurrency: '', // If you want to limit fiat selection eg 'USD'
    //email: '', // Your customer's email address
    //redirectURL: '',
    //hideMenu: true,
//};
const SCREEN_TITLE = 'Buy cryptos in a few clicks';
/*
 TODO
 Effacer fichiers inutilisés
 build url avec TRANSAK_OPT
 Tester une commande
*/
const IFRAME_HEIGHT = 630;
const IFRAME_WIDTH = 500;
const IFRAME_URL = `https://staging-global.transak.com?apiKey=${TRANSAK_API_KEY}&exchangeScreenTitle=${encodeURIComponent(SCREEN_TITLE)}&isFeeCalculationHidden=true&themeColor=198754&hideMenu=false&redirectURL=${window.location.origin}`;
const IFRAME_STYLE = {
  display: 'block', 
  width: '100%', 
  maxHeight: IFRAME_HEIGHT + 'px', 
  maxWidth: IFRAME_WIDTH + 'px'
}

//https://staging-global.transak.com/?apiKey=[insert your staging API key here]&redirectURL=https://transak.com&cryptoCurrencyList=ETH,DAI,USDT&defaultCryptoCurrency=DAI&walletAddress=0x2dd94DC4b658F08E33272e6563dAb1758c10b1de&disableWalletAddressForm=true&exchangeScreenTitle=My%20dApp%20is%20the%20best&isFeeCalculationHidden=true

function EasycryptoAppV1() {
  return (
    <>
      <nav className="navbar navbar-dark bg-success mb-5">
        <div className="container-fluid">
          <span className="navbar-text">
            <a href="/" className="fs-2 text-light pe-3 text-decoration-none">Easy Crypto</a>
            <span className="fs-5">A quick and easy way to purchase cryptos</span>
           </span> 
           <div>
            <a href="/" className="link-light me-3" title="Easy Crypto sur Facebook"><span className="fab fa-facebook-square fa-2x"></span></a> 
            <a href="/" className="link-light me-3" title="Easy Crypto sur Twitter"><span className="fab fa-twitter-square fa-2x"></span></a>
            <a href="/" className="link-light me-3" title="Easy Crypto sur Telegram"><span className="fab fa-telegram fa-2x"></span></a>
            <a href="/" className="link-light" title="Easy Crypto sur Discord"><span className="fab fa-discord fa-2x"></span></a>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center">
          <iframe height={IFRAME_HEIGHT} title="Transak On/Off Ramp Widget"
          src={IFRAME_URL} className="shadow"
          frameBorder="no" allowtransparency="true" allowFullScreen="" 
          style={IFRAME_STYLE}>
          </iframe>
      </div>
    </>
  );
}

export default EasycryptoAppV1;
