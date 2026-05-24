import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildRealtimeAuthHeader,
  normalizeRealtimeSession,
  shouldAttemptRealtimeConnection,
} from '../src/lib/voice/realtime-session.mjs'

test('normalizeRealtimeSession detects setup-required placeholder sessions', () => {
  const normalized = normalizeRealtimeSession({
    setupRequired: true,
    websocketUrl: 'wss://api.x.ai/v1/realtime',
    instructions: 'hello',
  })

  assert.equal(normalized.ready, false)
  assert.equal(normalized.setupRequired, true)
  assert.equal(normalized.websocketUrl, 'wss://api.x.ai/v1/realtime')
  assert.equal(normalized.instructions, 'hello')
  assert.equal(normalized.voice, 'ara')
})

test('normalizeRealtimeSession extracts common ephemeral token shapes', () => {
  const tokenShapes = [
    { session: { client_secret: { value: 'tok-a' } } },
    { session: { client_secret: 'tok-b' } },
    { session: { value: 'tok-e' } },
    { session: { ephemeral_token: 'tok-c' } },
    { session: { token: 'tok-d' } },
  ]

  assert.deepEqual(
    tokenShapes.map((shape) => normalizeRealtimeSession(shape).token),
    ['tok-a', 'tok-b', 'tok-e', 'tok-c', 'tok-d'],
  )
})

test('buildRealtimeAuthHeader uses bearer token when present', () => {
  assert.equal(buildRealtimeAuthHeader('abc123'), 'Bearer abc123')
  assert.equal(buildRealtimeAuthHeader(''), null)
  assert.equal(buildRealtimeAuthHeader(undefined), null)
})

test('shouldAttemptRealtimeConnection requires token and websocket url', () => {
  assert.equal(
    shouldAttemptRealtimeConnection({ ready: true, websocketUrl: 'wss://example.test', token: 'tok' }),
    true,
  )
  assert.equal(
    shouldAttemptRealtimeConnection({ ready: false, websocketUrl: 'wss://example.test', token: 'tok' }),
    false,
  )
  assert.equal(
    shouldAttemptRealtimeConnection({ ready: true, websocketUrl: 'wss://example.test' }),
    false,
  )
})
