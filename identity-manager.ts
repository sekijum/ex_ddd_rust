export interface IToken {
  token: string
  expire: number
}

export class IdentityManager {
  private tokenSetLocalStorageKey = 'credentials'

  public set tokenSet(tokenSet: IToken | undefined) {
    const key = this.tokenSetLocalStorageKey
    const tokenSetJSON = JSON.stringify(tokenSet)

    localStorage.setItem(key, tokenSetJSON)
    sessionStorage.setItem(key, tokenSetJSON)
  }

  public get tokenSet(): IToken | undefined {
    const key = this.tokenSetLocalStorageKey
    const tokenSetJSON = sessionStorage.getItem(key) || localStorage.getItem(key)

    if (!tokenSetJSON) undefined

    const tokenSetObject: IToken = JSON.parse(tokenSetJSON)

    return tokenSetObject
  }

  public get accessToken(): IToken | undefined {
    if (!this.tokenSet) {
      return undefined
    }
    return this.tokenSet
  }

  public clearCredentials() {
    sessionStorage.removeItem(this.tokenSetLocalStorageKey)
    localStorage.removeItem(this.tokenSetLocalStorageKey)
  }
}

const identityManager = new IdentityManager()

export default identityManager
