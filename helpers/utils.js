export const getCookieFromReq = (req, cookieKey) => {
  if (!req.headers.cookie) { return undefined }
  const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieKey}=`));

  if (!cookie) { return undefined };

  return cookie.split('=')[1];
}