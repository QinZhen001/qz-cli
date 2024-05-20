export interface IInstallOptions {
  dev: boolean
  peerDependencies?: boolean
}

export interface INpmConfig {
  dir: string
  name: string
}

export interface IResolvedCache {
  [key: string]: {
    main: string
    files: string[]
  }
}

export interface IOption {
  [key: string]: any
}
