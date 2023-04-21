export interface BannerInterface {
    title: string;
    subtitle?: string;
    image: string;
    button: {
        title: string;
        link?: string;
    },
    ourClients: {
        title: string;
        data: OurClientInterface[]
    },
    awesomeNumbers: {
        title: string;
        data?: AwesomeNumberInterface[]
    },
    services: ServiceInterface[]
}

export interface OurClientInterface {
    image?: string;
}

export interface AwesomeNumberInterface {
    number?: string;
    title?: string;
}

export interface ServiceInterface {
    title?: string;
    icon?: string;
}