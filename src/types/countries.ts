export declare interface Countries {
    name: nameCountries
    cca2: string
    cca3: string
    currencies: any | string
    idd: iddCountries
    languages: any | string
    flags: Flags
    population: number
    capital?: string[];
    region: Region;
    subregion: string;
    tld?: string[]
}