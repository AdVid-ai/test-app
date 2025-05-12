/**
 * Registers Fastify's built-in rate limiting plugin.
 * Limits each client to a maximum of 100 requests every 15 minutes.
 */

import rateLimit from '@fastify/rate-limit'

export default async function (fastify) {
  await fastify.register(rateLimit, {
    max: 100,
    timeWindow: '15 minutes'
  })
}