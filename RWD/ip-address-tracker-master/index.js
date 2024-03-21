var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getOwnIP, getGeoData, } from './geo.js';
// Display Error Message
function displayError(message) {
    const error = document.getElementById('errorMsg');
    error.style.display = 'block';
    error.innerText = message;
    setTimeout(() => {
        error.style.display = 'none';
        error.innerText = '';
    }, 3000);
}
function searchIP(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const input = document.getElementById('search');
        const ipOrDomain = input.value;
        if (!ipOrDomain) {
            displayError('IP Address or Domain is required');
            return;
        }
        else {
            const geoData = yield getGeoData(ipOrDomain);
            if (geoData.code === 422) {
                displayError(geoData.messages);
            }
            else {
                displayGeoData(geoData);
            }
        }
    });
}
;
// Display Geo Location Data
function displayGeoData(geoData) {
    const elementIDs = ['ipAddress', 'location', 'timezone', 'isp'];
    const ipAddress = document.getElementById('ipAddress');
    const location = document.getElementById('location');
    const timezone = document.getElementById('timezone');
    const isp = document.getElementById('isp');
    elementIDs.forEach(element => {
        switch (element) {
            case 'ipAddress':
                const p = document.createElement('p');
                p.innerText = geoData.ip;
                const oldIp = ipAddress.lastElementChild;
                ipAddress.replaceChild(p, oldIp);
                break;
            case 'location':
                const p2 = document.createElement('p');
                p2.innerText = `${geoData.location.region}, ${geoData.location.country}`;
                const oldloc = location.lastElementChild;
                location.replaceChild(p2, oldloc);
                break;
            case 'timezone':
                const p3 = document.createElement('p');
                p3.innerText = `UTC ${geoData.location.timezone}`;
                const oldTime = timezone.lastElementChild;
                timezone.replaceChild(p3, oldTime);
                break;
            case 'isp':
                const p4 = document.createElement('p');
                p4.innerText = geoData.isp;
                const oldIsp = isp.lastElementChild;
                isp.replaceChild(p4, oldIsp);
                break;
            default:
                break;
        }
    });
}
// Event Listener
const form = document.getElementById('form');
form.addEventListener('submit', searchIP);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ip = yield getOwnIP();
        const geoData = yield getGeoData(ip);
        if (geoData) {
            displayGeoData(geoData);
        }
    });
}
main();
