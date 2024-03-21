const API_KEY = 'at_OkI9ADcXwwIjVCXz0qjSCqr85UfsS';
const API_URL = 'https://geo.ipify.org/api/v2/country?apiKey=';

// JSON Object Types
type JSONPrimitive = string | number | boolean | null;
type JSONArray = JSONValue[];
type JSONObject = { [k: string]: JSONValue };
type JSONValue = JSONArray | JSONObject | JSONPrimitive;

interface GeoData {
  ip: string;
  location: JSONObject;
  isp: string;
  as: JSONObject;
  domains: JSONArray;
};

function checkIpAddress(ip: string): boolean { 
  const ipv4Pattern =  
    /^(\d{1,3}\.){3}\d{1,3}$/; 
  const ipv6Pattern =  
    /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/; 
  return ipv4Pattern.test(ip) || ipv6Pattern.test(ip); 
} 

async function getOwnIP(): Promise<string> {
  return await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip);
}

async function getGeoData(ipOrDomain: string): Promise<GeoData> {
  const query = checkIpAddress(ipOrDomain)
  ? `ipAddress=${ipOrDomain}`
  : `domain=${ipOrDomain}`;

  return await fetch(`${API_URL}${API_KEY}&${query}`)
    .then(response => response.json())
    .then(data => data);
}

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
        ipAddress.appendChild(p);
        break;
        case 'location':
        const p2 = document.createElement('p');
        p2.innerText = `${geoData.location.region}, ${geoData.location.country}`;
        location.appendChild(p2);
        break;
        case 'timezone':
        const p3 = document.createElement('p');
        p3.innerText = `UTC ${geoData.location.timezone}`;
        timezone.appendChild(p3);
        break;
        case 'isp':
        const p4 = document.createElement('p');
        p4.innerText = geoData.isp;
        isp.appendChild(p4);
        break;
  
      default:
        break;
    }
  });
}

async function main() {
  const ip = await getOwnIP();
  const geoData = await getGeoData(ip);
  if (geoData) {
    displayGeoData(geoData);
  }
  console.log(geoData);
}

main();