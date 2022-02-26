import json from './secret.json';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${json.CLIENT_ID}&redirect_uri=${json.REDIRECT_URI}&response_type=code`;
