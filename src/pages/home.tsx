import React from "react";
import { Banner } from "@/components/Banner";
import { AwesomeNumberInterface, OurClientInterface, ServiceInterface, WhyChooseUsItemInterface } from "@/types";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Home: React.FC = () => {

    const OurClientsData: OurClientInterface[] = [
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

    const whyChooseUsData: WhyChooseUsItemInterface[] = [
        {
            icon: "/images/why-choose-us/pricing.svg",
            title: "Affordable Pricing",
            description: "Our pricing is highly competitive and flexible, ensuring accessibility for businesses of all sizes and budgets."
        },
        {
            icon: "/images/why-choose-us/verified-agents.svg",
            title: "Verified Agencies",
            description: "All of our vendors go through a rigorous vetting process to ensure they meet our high standards for quality and professionalism."
        },
        {
            icon: "/images/why-choose-us/time-saving.svg",
            title: "Time Saving & Efficient",
            description: "We've designed our marketplace to streamline communication between you and service providers, saving you valuable time in the process."
        },
        {
            icon: "/images/why-choose-us/dedicated-server.svg",
            title: "Dedicated Support",
            description: "Our customer support team is available to help you every step of the way, from finding the right service provider to resolving any issues that may arise."
        },
        {
            icon: "/images/why-choose-us/escrow-payments.svg",
            title: "Escrow Payments",
            description: "We offers secure escrow payments to protect both clients and vendors, giving you peace of mind that your payments are safe & secure."
        }
    ];

    return <div>
        <Banner
            image={"/images/banner.png"}
            title="Find Your Perfect Digital Marketing Partner"
            subtitle="Search My Expert is The One-Stop Solution for Businesses Searching for Digital Services."
            button={{
                title: "Let`s Get Started",
            }}
            ourClients={{
                title: "Clients that Trust Us",
                data: OurClientsData
            }}
            awesomeNumbers={{
                title: "Our Awesome Numbers",
                data: awesomeNumbers
            }}
            services={servicesData}
        />

        <About/>

        <WhyChooseUs
            image="/images/why-choose-us-bg.png"
            title="why us"
            subtitle="Why Choose Search My Expert?"
            description="Our team of customer-focused professionals works with a diverse range of certified partners to ensure seamless project management from start to finish."
            items={whyChooseUsData}
        />
    </div>
}

export default Home;