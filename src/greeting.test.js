import { test } from 'node:test'
import assert from 'node:assert'
import { greeting } from './greeting.js'

test('greeting builds a friendly message', () => {
  assert.strictEqual(greeting('world'), 'Hello, world!')
})
