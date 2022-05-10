import './EasycryptoApp.css';

const TRANSAK_API_KEY = 'ff5d9cc4-647a-493e-a764-4434e063e7be';
const SCREEN_TITLE = 'Buy cryptos in a few clicks';
const IFRAME_HEIGHT = 630;
const IFRAME_WIDTH = 500;
const IFRAME_URL = `https://staging-global.transak.com?apiKey=${TRANSAK_API_KEY}&exchangeScreenTitle=${encodeURIComponent(SCREEN_TITLE)}&isFeeCalculationHidden=true&themeColor=198754&hideMenu=false&redirectURL=${window.location.origin}`;
const IFRAME_STYLE = {
  display: 'block', 
  width: '100%', 
  maxHeight: IFRAME_HEIGHT + 'px', 
  maxWidth: IFRAME_WIDTH + 'px'
}


function EasycryptoApp() {
  return (
    <>
      <nav className="navbar navbar-dark bg-success mb-5">
        <div className="container-fluid">
          <span className="navbar-text">
            <a id="page-title" href="/" className="fs-2 text-light pe-3 text-decoration-none">Easy Crypto</a>
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

export default EasycryptoApp;
