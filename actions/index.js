import axios from 'axios';
import Cookies from 'js-cookie';
import { getCookieFromReq } from '../helpers/utils';

const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
  console.log(token);
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJtdXRpNTciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTU3OTc3MTMxNywiZXhwIjoxNTc5Nzc0OTE3fQ.2ATpuqeSaKROIKR08_VyNbB9VJpZilGDoVJ8HX2utFs'
  if (token) {
    return { headers: { 'authorization': `Bearer ${token}` } }
  }
  return undefined
}

export const getSecretData = async (req) => {
  return await axios.get('http://localhost:5000/api/nextjs/getsecret', setAuthHeader(req))
    .then(resp => resp.data);
}
