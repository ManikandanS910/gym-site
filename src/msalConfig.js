import { PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'b1fdbbd6-8749-4dac-8aeb-399e4d5fe7dd',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:3000/auth/callback'
  }
};

const msalInstance = new PublicClientApplication(msalConfig);
export default msalInstance;