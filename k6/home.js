
import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Métricas personalizadas
const responseTime = new Trend('portal_response_time');
const errorRate = new Rate('portal_error_rate');

// Configurações
const BASE_URL = __ENV.BASE_URL ||
  'https://www.rj.gov.br/proderj/';

const VUS = Number(__ENV.VUS || 100);
const DURATION = __ENV.DURATION || '30s';

export const options = {
  scenarios: {
    portal_performance: {
      executor: 'constant-vus',
      vus: VUS,
      duration: DURATION,
    },
  },

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<3000'],
    portal_error_rate: ['rate<0.01'],
  },

  maxRedirects: 5,
};

export default function () {

  const response = http.get(BASE_URL, {
    headers: {
      'User-Agent': 'k6-performance-test/1.0',
      'Accept': 'text/html',
    },
    timeout: '15s',
  });

  responseTime.add(response.timings.duration);

  const success = check(response, {
    'HTTP status 200': (r) => r.status === 200,

    'Response time abaixo de 3 segundos':
      (r) => r.timings.duration < 3000,

    'Content-Type HTML':
      (r) => r.headers['Content-Type'] &&
        r.headers['Content-Type'].includes('text/html'),

    'Response body não vazio':
      (r) => r.body && r.body.length > 0,
  });

  errorRate.add(!success);

  sleep(2);
}

// Resumo da execução
export function handleSummary(data) {

  const metrics = data.metrics;
  const duration = metrics.http_req_duration.values;

  // Quantidade máxima real de VUs utilizados
  const vus = metrics.vus_max.values.max;

  // Data e hora
  const executionDateTime = new Date();

  const summary = {
    endpoint: BASE_URL,

    vus: vus,

    execution_date: executionDateTime
      .toLocaleDateString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
      }),

    execution_time: executionDateTime
      .toLocaleTimeString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
      }),

    execution_datetime: executionDateTime.toISOString(),

    duration: DURATION,

    total_requests: metrics.http_reqs.values.count,

    failed_requests: metrics.http_req_failed.values.passes,

    avg_response_time_ms: duration.avg,
    min_response_time_ms: duration.min,
    max_response_time_ms: duration.max,

    p90_ms: duration['p(90)'],
    p95_ms: duration['p(95)'],
    p99_ms: duration['p(99)'],
  };

  console.log(JSON.stringify(summary, null, 2));

  // Arquivo individual da execução
  return {
    '100vus.json':
      JSON.stringify(summary, null, 2),
  };
}
