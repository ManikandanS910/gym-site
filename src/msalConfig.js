import { PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'b1fdbbd6-8749-4dac-8aeb-399e4d5fe7dd',
    authority: 'https://login.microsoftonline.com/baasdeveloper.onmicrosoft.com',
    redirectUri: 'http://localhost:3000'
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: true, // Helps in cross-browser issues
  },
};

const msalInstance = new PublicClientApplication(msalConfig);
export default msalInstance;