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

export interface WhyChooseUsInterface {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    items: WhyChooseUsItemInterface[];
}

export interface WhyChooseUsItemInterface {
    icon: string;
    title: string;
    description: string;
}

export interface HowItWorksInterface {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    items: HowItWorksItemInterface[];
}

export interface HowItWorksItemInterface {
    icon: string;
    title: string;
    description: string;
}

export interface TrackYourProjectInterface {
    title: string;
    subtitle: string;
    description: string;
    items: TrackYourProjectItemInterface[];
}

export interface TrackYourProjectItemInterface {
    icon: string;
    title: string;
    position: number;
    description: string;
}

export interface StayOnTopInterface {
    image: string;
    title: string;
    subtitle: string;
    featured_1: StayOnTopFeaturedInterface;
    featured_2: StayOnTopFeaturedInterface;
}

export interface StayOnTopFeaturedInterface {
    image: string;
    title: string;
    description: string;
}

export interface CardInterface {
    icon: string;
    position: number;
    title: string;
    description: string;
    type: "how-it-works" | "track-your-project";
}