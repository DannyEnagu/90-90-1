var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_KEY = 'at_OkI9ADcXwwIjVCXz0qjSCqr85UfsS';
const API_URL = 'https://geo.ipify.org/api/v1?apiKey=';
;
function checkIpAddress(ip) {
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
}
export function getOwnIP() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip);
    });
}
export function getGeoData(ipOrDomain) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = checkIpAddress(ipOrDomain)
            ? `ipAddress=${ipOrDomain}`
            : `domain=${ipOrDomain}`;
        return yield fetch(`${API_URL}${API_KEY}&${query}`)
            .then(response => response.json())
            .then(data => data);
    });
}
