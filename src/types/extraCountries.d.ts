declare interface nameCountries {
    common: string;
    official: string
    nativeName: NativeName;
}

declare interface iddCountries{
    root : string;
    suffixex: string[]
}

declare interface Languages{
    fra: string;
    prs: string;
    pus: string;
    tuk: string
}

declare interface NativeName {
    prs: Translation;
    pus: Translation;
    tuk: Translation;
}

declare interface Translation {
    official: string;
    common:   string;
}
declare interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

declare enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}