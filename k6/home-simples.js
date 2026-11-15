
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '60s',
};

export default function () {

  // const response = http.get('https://www.rj.gov.br/proderj/');

  const response = http.get('https://www.facebook.com');

  console.log(`Status Code: ${response.status}`);

  sleep(1);
}
