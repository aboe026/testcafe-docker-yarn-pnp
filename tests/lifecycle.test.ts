import { Selector } from 'testcafe'
import fetch from 'node-fetch'

fixture('Lifecycle').page('https://google.com')

test('Search bar exists', async (t) => {
  const result = await fetch('https://swapi.dev/api/people/1')
  const text = await result.text()
  let json
  try {
    json = JSON.parse(text)
  } catch (err) {
    throw Error(`Invalid JSON response '${text}': '${err}'`)
  }
  await t.expect(json.name).eql('Luke Skywalker')
  await t.expect(Selector('input[title="Search"]').exists).ok()
})
