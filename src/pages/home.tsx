import React from "react";
import { Banner } from "@/components/Banner";
import {
    AwesomeNumberInterface,
    HowItWorksItemInterface,
    OurClientInterface,
    ServiceInterface,
    StayOnTopInterface,
    TrackYourProjectItemInterface,
    WhyChooseUsItemInterface
} from "@/types";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { TrackYourProject } from "@/components/TrackYourProject";
import { StayOnTop } from "@/components/StayOnTop";

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

    const howItWorksData: HowItWorksItemInterface[] = [
        {
            icon: "/images/how-its-work/what-you-need.svg",
            title: "Tell Us What You Need",
            description: "No Matter Your Needs, We'll Connect You with a Qualified Expert.",
        },
        {
            icon: "/images/how-its-work/partner.svg",
            title: "We Connect You With a Partner",
            description: "No Matter Your Needs, We'll Connect You with a Qualified Expert.",
        },
        {
            icon: "/images/how-its-work/contracts.svg",
            title: "Sign Contracts",
            description: "Receive fast & free services quotes from the expert talents near you.",
        },
        {
            icon: "/images/how-its-work/track-your-project.svg",
            title: "Track Your Project Progress",
            description: "Pick from some of the best Top-Rated Marketing Specialists with Ease.",
        },
    ];

    const trackYourProjectData: TrackYourProjectItemInterface[] = [
        {
            position: 1,
            icon: "/images/track-your-project/client-portal.svg",
            title: "A Client Portal",
            description: "On your project dashboard, you'll be able to see the status of your project, including the tasks that have been completed and those that are still in progress.",
        },
        {
            position: 2,
            icon: "/images/track-your-project/project-manager.svg",
            title: "Dedicated Project Manager",
            description: "You can communicate with your project team through our platform, whether it's sending messages, sharing files, or scheduling meetings.",
        },
        {
            position: 3,
            icon: "/images/track-your-project/progress.svg",
            title: "Monitor Progress",
            description: "As your project progresses, you'll be able to monitor the progress of individual tasks and milestones, ensuring that everything is on track.",
        },
        {
            position: 6,
            icon: "/images/track-your-project/revision.svg",
            title: "Request Revisions",
            description: "You can request revisions from your vendors if you are not fully satisfied with the final work, and they will make the required changes until you are content with the outcome.",
        },
        {
            position: 5,
            icon: "/images/track-your-project/complete-work.svg",
            title: "Approve Completed Work",
            description: "Once a task or milestone is completed, you'll be able to review it and provide feedback. If you're satisfied with the work, you can approve it and move on to the next task.",
        },
        {
            position: 4,
            icon: "/images/track-your-project/regular-update.svg",
            title: "Receive Regular Updates",
            description: "Our digital marketing professionals provide regular updates on their progress, so you'll always know what's happening with your project.",
        },
    ];

    const stayOnTopData: StayOnTopInterface = {
        image: "/images/stay-on-top-bg.png",
        title: "EASY COMMUNICATION",
        subtitle: "Stay on Top of Your Work",
        featured_1: {
            image: "/images/alerts-featured.png",
            title: "Get Alerts & Notifications for your Project Tasks.",
            description: "With alerts and notifications, you can receive reminders about upcoming deadlines, changes to project schedules, and updates on the progress of your work. This can help you stay on top of your workload, reducing the risk of missed deadlines or overlooked tasks.",
        },
        featured_2: {
            image: "/images/comunicate-directly-featured.png",
            title: "Communicate directly with the agency partners and your project managers.",
            description: "We believe that direct communication between clients and project managers is critical to the success of any project. You can share their ideas, concerns, and feedback with our team, allowing us to better understand their needs and expectations. This help our vendors to deliver projects that meet our clients' expectations.",
        }
    };

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

        <HowItWorks
            image="/images/how-its-work-bg.png"
            title="STEP-BY-STEP"
            subtitle="How It Works"
            description="With us, you can kickstart your digital journey in 24 hours!"
            items={howItWorksData}
        />

        <TrackYourProject
            title="EASILY TRACK"
            subtitle="Track Your Project"
            description="Easily track & ensure that your project is completed to your satisfaction."
            items={trackYourProjectData}
        />

        <StayOnTop
            image={stayOnTopData.image}
            title={stayOnTopData.title}
            subtitle={stayOnTopData.subtitle}
            featured_1={stayOnTopData.featured_1}
            featured_2={stayOnTopData.featured_2}
        />
    </div>
}

export default Home;