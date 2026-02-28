import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,        // virtual users
  duration: '15s',   // test duration
  thresholds: {
    http_req_duration: ['p(70)<500'], // 95% of requests should be below 500ms
  },
};

export default function () {
  let res = http.get (
    'https://user:passwd@httpbin.org/basic-auth/user/passwd',
    {
  });


  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
    'authenticated': (r) => r.json().authenticated === true,
    

  });

  sleep(1);
}