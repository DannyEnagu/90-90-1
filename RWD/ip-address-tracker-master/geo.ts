const API_KEY = 'at_OkI9ADcXwwIjVCXz0qjSCqr85UfsS';
const API_URL = 'https://geo.ipify.org/api/v1?apiKey=';

// JSON Object Types
export type JSONPrimitive = string | number | boolean | null;
export type JSONArray = JSONValue[];
export type JSONObject = { [k: string]: JSONValue };
export type JSONValue = JSONArray | JSONObject | JSONPrimitive;

export interface GeoData {
  ip: string;
  location: JSONObject;
  isp: string;
  as: JSONObject;
  domains: JSONArray;
  code: number;
  messages: string;
};

function checkIpAddress(ip: string): boolean { 
  const ipv4Pattern =  
    /^(\d{1,3}\.){3}\d{1,3}$/; 
  const ipv6Pattern =  
    /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/; 
  return ipv4Pattern.test(ip) || ipv6Pattern.test(ip); 
} 

export async function getOwnIP(): Promise<string> {
  return await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip);
}

export async function getGeoData(ipOrDomain: string): Promise<GeoData> {
  const query = checkIpAddress(ipOrDomain)
  ? `ipAddress=${ipOrDomain}`
  : `domain=${ipOrDomain}`;

  return await fetch(`${API_URL}${API_KEY}&${query}`)
    .then(response => response.json())
    .then(data => data);
}