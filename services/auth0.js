import auth0 from 'auth0-js';
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { getCookieFromReq } from '../helpers/utils';

class Auth {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-vcj-4166.auth0.com',
      clientID: 'lbq9HQlpl55PbVHD0gSSCsrBjCZekwAa',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openId'
    });

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.login = this.login.bind(this);
    // this.isAuthenticated = this.isAuthenticated.bind(this);
    this.logout = this.logout.bind(this);
  }


  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      })
    })

  }

  login() {
    this.auth0.authorize();
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())

    Cookie.set('user', authResult.idTokenPayload);
    Cookie.set('jwt', authResult.idToken);
    Cookie.set('expiresAt', expiresAt);

  }

  logout() {
    Cookie.remove('user');
    Cookie.remove('jwt');
    Cookie.remove('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientID: 'lbq9HQlpl55PbVHD0gSSCsrBjCZekwAa'
    })
  }

  // isAuthenticated() {
  //   const expiresAt = Cookie.getJSON('expiresAt');
  //   return new Date().getTime() < expiresAt;
  // }

  async getJWKS() {
    const res = await axios.get('https://dev-vcj-4166.auth0.com/.well-known/jwks.json');
    const jwks = res.data;
    return jwks;
  }

  async verifyToken(token) {

    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });
      if (!decodedToken) { return undefined; }
      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0];

      let cert = jwk.x5c[0];
      cert = cert.match(/.{1,64}/g).join('\n');
      // cert = `-----BEGIN CERTIFICATE-----\n${cert}-----END CERTIFICATE-----\n`;
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----`;

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, cert)
          const expiresAt = verifiedToken.exp * 1000;
          return (verifiedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
        } catch (err) {
          console.log(err);
          return undefined;
        }
      }

    }
    return undefined;
  }

  async  clientAuth() {
    const token = Cookie.getJSON('jwt');
    const verifiedToken = await this.verifyToken(token);

    return verifiedToken;
  }

  async serverAuth(req) {
    if (req.headers.cookie) {

      const token = getCookieFromReq(req, 'jwt');
      const verifiedToken = await this.verifyToken(token);

      return verifiedToken;
    }
    return undefined;
  }

  getToken() {
    return Cookie.getJSON('jwt');
  }

}

const auth0Client = new Auth();

export default auth0Client;