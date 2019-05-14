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

const { Command, flags } = require('@oclif/command')
const Conf = require('conf')

class GetCommand extends Command {
  async run () {
    const { args, flags } = this.parse(GetCommand)

    let retVal = await this.get(args.key)
    if (retVal) {
      this.log(retVal)
    }
    return (flags.json) ? JSON.stringify(retVal) : retVal
  }

  async get (key) {
    const conf = new Conf()
    return (key) ? conf.get(key) : conf.store
  }
}

GetCommand.description = 'gets a persistent config value'

GetCommand.args = [
  { name: 'key' }
]

GetCommand.flags = {
  json: flags.boolean({ char: 'j', description: 'format as JSON' })
}

module.exports = GetCommand
