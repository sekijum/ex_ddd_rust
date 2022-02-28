export interface ITokenSet {
  token: string
  expire: number
}

export class IdentityManager {
  private tokenSetLocalStorageKey = 'credentials'

  public set tokenSet(tokenSet: ITokenSet | undefined) {
    const key = this.tokenSetLocalStorageKey
    const tokenSetJSON = JSON.stringify(tokenSet)

    localStorage.setItem(key, tokenSetJSON)
    sessionStorage.setItem(key, tokenSetJSON)
  }

  public get tokenSet(): ITokenSet | undefined {
    const key = this.tokenSetLocalStorageKey
    const tokenSetJSON = sessionStorage.getItem(key) || localStorage.getItem(key)

    if (!tokenSetJSON) undefined

    const tokenSetObject: ITokenSet = JSON.parse(tokenSetJSON)

    return tokenSetObject
  }

  public clearCredentials() {
    sessionStorage.removeItem(this.tokenSetLocalStorageKey)
    localStorage.removeItem(this.tokenSetLocalStorageKey)
  }
}

const identityManager = new IdentityManager()

export default identityManager
