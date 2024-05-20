export declare function getRootPath(): string
export declare function getPkgVersion(): string
export declare function getPkgItemByKey(key: string): any
export declare function printPkgVersion(): void
export declare type TemplateSourceType = "git" | "url"
export declare function getTemplateSourceType(url: string): TemplateSourceType
export declare function clearConsole(): void
export declare function execCommand(params: {
  command: string
  successCallback?: (data: string) => void
  failCallback?: (data: string) => void
}): void
export declare function getPkgNameByFilterVersion(pkgString: string): string
