/**
 * Attaches logging hooks to Fastify for request and response lifecycle.
 * Logs details like method, URL, IP, status, and response time.
 */
export default async function (fastify) {
  fastify.addHook('onRequest', async (request) => {
    fastify.log.info({
      method: request.method,
      url: request.url,
      ip: request.ip
    }, 'Incoming request')
  })

  fastify.addHook('onResponse', async (request, reply) => {
    fastify.log.info({
      method: request.method,
      url: request.url,
      status: reply.statusCode,
      duration: reply.getResponseTime()
    }, 'Request completed')
  })
}