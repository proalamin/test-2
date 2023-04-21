export interface BannerInterface {
    title: string;
    subtitle?: string;
    image: string;
    button: {
        title: string;
        link?: string;
    },
    clients?: {
        title: string;
        data?: ClientInterface[]
    },
    awesomeNumbers?: {
        title: string;
        data?: AwesomeNumberInterface[]
    },
    services?: ServiceInterface[]
}

export interface ClientInterface {
    image?: string;
}

export interface AwesomeNumberInterface {
    number?: number;
    title?: string;
}

export interface ServiceInterface {
    title?: string;
    icon?: string;
}