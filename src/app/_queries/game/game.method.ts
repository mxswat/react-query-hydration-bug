import { GameQueryVariables } from "./game.query"

// Mocked API
export const fetchGame = async (variables: GameQueryVariables) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return Promise.resolve({
    name: 'Game Name',
    id: '1',
    domainNAme: 'domainName' in variables ? variables.domainName : 'default',
  })
}