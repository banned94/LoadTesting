import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const url = __ENV.TARGET_URL || 'https://test.k6.io';
  const res = http.get(url);
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
