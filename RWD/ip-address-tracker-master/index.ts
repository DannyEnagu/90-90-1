import {
  getOwnIP,
  getGeoData,
  GeoData,
} from './geo.js';

// Display Error Message
function displayError(message: string) {
  const error = document.getElementById('errorMsg') as HTMLParagraphElement;
  error.style.display = 'block';
  error.innerText = message;

  setTimeout(() => {
    error.style.display = 'none';
    error.innerText = '';
  }, 3000);
}

async function searchIP(e: Event) {
  e.preventDefault();
  const input = document.getElementById('search') as HTMLInputElement;
  const ipOrDomain = input.value;
  if (!ipOrDomain) {
    displayError('IP Address or Domain is required');
    return;
  } else {
    const geoData = await getGeoData(ipOrDomain);
    if (geoData.code === 422) {
      displayError(geoData.messages);
    } else {
      displayGeoData(geoData);
    }
  }

};

// Display Geo Location Data
function displayGeoData(geoData: GeoData) {
  const elementIDs = ['ipAddress', 'location', 'timezone', 'isp'];
  const ipAddress = document.getElementById('ipAddress') as HTMLDivElement;
  const location = document.getElementById('location') as HTMLDivElement;
  const timezone = document.getElementById('timezone') as HTMLDivElement;
  const isp = document.getElementById('isp') as HTMLDivElement;

  
  elementIDs.forEach(element => {
    switch (element) {
      case 'ipAddress':
        const p = document.createElement('p');
        p.innerText = geoData.ip;
        const oldIp = ipAddress.lastElementChild as HTMLParagraphElement;
        ipAddress.replaceChild(p, oldIp);
        break;

        case 'location':
        const p2 = document.createElement('p');
        p2.innerText = `${geoData.location.region}, ${geoData.location.country}`;
        const oldloc = location.lastElementChild as HTMLParagraphElement;
        location.replaceChild(p2, oldloc);
        break;

        case 'timezone':
        const p3 = document.createElement('p');
        p3.innerText = `UTC ${geoData.location.timezone}`;
        const oldTime = timezone.lastElementChild as HTMLParagraphElement;
        timezone.replaceChild(p3, oldTime);
        break;
        
        case 'isp':
        const p4 = document.createElement('p');
        p4.innerText = geoData.isp;
        const oldIsp = isp.lastElementChild as HTMLParagraphElement;
        isp.replaceChild(p4, oldIsp);
        break;
  
      default:
        break;
    }
  });
}

// Event Listener
const form = document.getElementById('form') as HTMLFormElement;
form.addEventListener('submit', searchIP);

async function main() {
  const ip = await getOwnIP();
  const geoData = await getGeoData(ip);
  if (geoData) {
    displayGeoData(geoData);
  }
}

main();