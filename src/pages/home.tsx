import React from "react";
import { Banner } from "@/components/Banner";
import { AwesomeNumberInterface, ClientInterface, ServiceInterface } from "@/types";

const Home: React.FC = () => {

    const clients: ClientInterface[] = [
        {
            image: "/images/clients/stryker.svg",
        },
        {
            image: "/images/clients/greenfence.svg",
        },
        {
            image: "/images/clients/corelogic.svg",
        }
    ];

    const awesomeNumbers: AwesomeNumberInterface[] = [
        {
            number: "3,455",
            title: "Projects Started",
        },
        {
            number: "2,145",
            title: "Happy Clients",
        },
        {
            number: "1,512",
            title: "Agencies",
        }
    ];

    const servicesData: ServiceInterface[] = [
        {
            title: "Web Designing",
            icon: "/images/services/web-designing.svg",
        },
        {
            title: "Web Development",
            icon: "/images/services/web-development.svg",
        },
        {
            title: "Social Media Marketing",
            icon: "/images/services/social-media.svg",
        },
        {
            title: "Pay Per Click Marketing",
            icon: "/images/services/pay-per-click.svg",
        },
        {
            title: "Search Engine Optimization",
            icon: "/images/services/search-engine-optimization.svg",
        },
        {
            title: "Software Development",
            icon: "/images/services/software-development.svg",
        },
    ];

    return <div>
        <Banner
            image={"/images/banner.png"}
            title="Find Your Perfect Digital Marketing Partner"
            subtitle="Search My Expert is The One-Stop Solution for Businesses Searching for Digital Services."
            button={{
                title: "Let`s Get Started",
            }}
            clients={{
                title: "Clients that Trust Us",
                data: clients
            }}
            awesomeNumbers={{
                title: "Our Awesome Numbers",
                data: awesomeNumbers
            }}
            services={servicesData}
        />
    </div>
}

export default Home;