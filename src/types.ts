export interface BannerInterface {
    header: HeaderInterface;
    title: string;
    subtitle: string;
    image: string;
    button: {
        title: string;
        link?: string;
    };
    ourClients: OurClientInterface[];
    awesomeNumbers: AwesomeNumberInterface[];
}

export interface HeaderInterface {
    button: {
        title: string;
        href?: string;
    }
}

export interface OurClientInterface {
    image: string;
}

export interface AwesomeNumberInterface {
    number: string;
    title: string;
}

export interface ServicesInterface {
    title: string;
    subtitle: string;
    description: string;
    data: ServiceInterface[];
}

export interface ServiceInterface {
    image: string;
    title: string;
    description: string;
}

export interface AboutUsInterface {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    featured_1: AboutUsFeaturedInterface;
    featured_2: AboutUsFeatured2Interface;
}

export interface AboutUsFeaturedInterface {
    content_1: {
        bold: string;
        normal?: string;
    }
    content_2: string
}

export interface AboutUsFeatured2Interface {
    content_1: { bold: string }
    content_2: string
    content_3: string
}

export interface WhyChooseUsInterface {
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

export interface TestimonialsInterface {
    title: string;
    subtitle: string;
    description: string;
    items: TestimonialsItemInterface[];
}

export interface TestimonialsItemInterface {
    date: string;
    rating: number;
    title: string;
    description: string;
    author_name: string;
    date_of_experience: string;
}

export interface ContactUsInterface {
    title: string;
    subtitle: string;
    description: string;
    form: ContactUsFormInterface;
    countries: string[];
}

export interface ContactUsFormInterface {
    f_name: FormValuesInterface;
    l_name: FormValuesInterface;
    mobile: FormValuesInterface;
    email: FormValuesInterface;
}

export interface FormValuesInterface {
    label: string;
    name: string;
    value: string;
}

export interface FooterInterface {
    countries: CountryInterface[];
    links: {
        quick: {
            title: string,
            links: LinksInterface[];
        },
        products: {
            title: string,
            links: LinksInterface[];
        },
        resources: {
            title: string,
            links: LinksInterface[];
        },
        services: {
            title: string,
            links: LinksInterface[];
        }
    };
    legal: {
        title: string;
        address: string;
        email: string;
        phone: string;
        social_media: SocialMediaInterface[];
    };
    copyRight: string;
}

export interface CountryInterface {
    icon: string;
    name: string;
}

export interface SocialMediaInterface {
    icon: string;
    name: string;
    url?: string;
}

export interface LinksInterface {
    title: string;
    href?: string;
}

export interface CardInterface {
    icon: string;
    position: number;
    title: string;
    description: string;
    type: "how-it-works" | "track-your-project";
}

export interface LoginInterface {
    username: string;
    password: string;
}

export interface AdminLinksInterface {
    label: string;
    href: string;
    active: boolean;
    subLinks: SubLinksInterface[]
}

export interface SubLinksInterface {
    label: string;
    href: string;
    active: boolean;
}