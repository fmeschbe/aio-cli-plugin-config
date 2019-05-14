/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const GetCommand = require('../../../src/commands/config/get.js')
// auto-mocked in __mocks__
jest.mock('conf')

test('no key', async () => {
  let val = await GetCommand.run([])
  return expect(val).toEqual({ known_key: 'known_value' })
})

test('undefined key', async () => {
  let val = await GetCommand.run(['unknown'])
  return expect(val).toBeUndefined()
})

test('defined key', async () => {
  let val = await GetCommand.run(['known_key'])
  return expect(val).toEqual('known_value')
})

test('no key, -j', async () => {
  let val = await GetCommand.run(['-j'])
  return expect(JSON.parse(val)).toEqual({ known_key: 'known_value' })
})

test('undefined key, -j', async () => {
  let val = await GetCommand.run(['-j', 'unknown'])
  return expect(val).toBeUndefined()
})

test('defined key, -j', async () => {
  let val = await GetCommand.run(['-j', 'known_key'])
  return expect(JSON.parse(val)).toEqual('known_value')
})

test('no key, --json', async () => {
  let val = await GetCommand.run(['--json'])
  return expect(JSON.parse(val)).toEqual({ known_key: 'known_value' })
})

test('undefined key, --json', async () => {
  let val = await GetCommand.run(['--json', 'unknown'])
  return expect(val).toBeUndefined()
})

test('defined key, --json', async () => {
  let val = await GetCommand.run(['--json', 'known_key'])
  return expect(JSON.parse(val)).toEqual('known_value')
})
