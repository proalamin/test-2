import React from "react";
import { Banner } from "@/components/Banner";
import {
    BannerInterface,
    ContactUsInterface,
    FooterInterface,
    HowItWorksInterface,
    StayOnTopInterface,
    TestimonialsInterface,
    TrackYourProjectInterface,
    WhyChooseUsInterface
} from "@/types";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { TrackYourProject } from "@/components/TrackYourProject";
import { StayOnTop } from "@/components/StayOnTop";
import { Testimonials } from "@/components/Testimonials";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Comman/Footer";

const Home: React.FC = () => {

    const BannerData: BannerInterface = {
        image: "/images/banner.png",
        title: "Find Your Perfect Digital Marketing Partner",
        subtitle: "Search My Expert is The One-Stop Solution for Businesses Searching for Digital Services.",
        button: {
            title: "Let`s Get Started",
        },
        ourClients: {
            title: "Clients that Trust Us",
            data: [
                {
                    image: "/images/clients/stryker.svg",
                },
                {
                    image: "/images/clients/greenfence.svg",
                },
                {
                    image: "/images/clients/corelogic.svg",
                },
                {
                    image: "/images/clients/greenfence.svg",
                }
            ]
        },
        awesomeNumbers: {
            title: "Our Awesome Numbers",
            data: [
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
                },
                {
                    number: "2,145",
                    title: "Happy Clients",
                }
            ]
        },
        services: [
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
        ],
        header: {
            logo: "/images/logo.svg",
            button: {
                title: "Get Started"
            }
        }
    }

    const whyChooseUsData: WhyChooseUsInterface = {
        image: "/images/why-choose-us-bg.png",
        title: "why us",
        subtitle: "Why Choose Search My Expert?",
        description: "Our team of customer-focused professionals works with a diverse range of certified partners to ensure seamless project management from start to finish.",
        items: [
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
        ]
    };

    const howItWorksData: HowItWorksInterface = {
        image: "/images/how-its-work-bg.png",
        title: "STEP-BY-STEP",
        subtitle: "How It Works",
        description: "With us, you can kickstart your digital journey in 24 hours!",
        items: [
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
        ]
    };

    const trackYourProjectData: TrackYourProjectInterface = {
        title: "EASILY TRACK",
        subtitle: "Track Your Project",
        description: "Easily track & ensure that your project is completed to your satisfaction.",
        items: [
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
        ]
    };

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

    const TestimonialsData: TestimonialsInterface = {
        title: "TESTIMONIALS",
        subtitle: "We’re So Grateful For The Trust Our Customers Have Placed In Us.",
        description: "Don't just take “OUR” word for it",
        items: [
            {
                title: "I was struggling to gain traction with…",
                description: "I was struggling to gain traction with my digital marketing efforts, but the search my expert helped me to turn things around. They provided me with practical solutions that have had a …",
                date_of_experience: "2023-03-22T18:30:00.000Z",
                date: "2023-04-18T18:30:00.000Z",
                rating: 2,
                author: {
                    name: "Gagan Singh"
                }
            },
            {
                title: "I had a tight deadline for my app and…",
                description: "I was struggling to gain traction I had a tight deadline for my app and the SearchMyExpert was able to deliver on time without compromising on quality. I was really impressed with …",
                date_of_experience: "2023-03-31T18:30:00.000Z",
                date: "2023-04-16T18:30:00.000Z",
                rating: 3,
                author: {
                    name: "Karan Kumar"
                }
            },
            {
                title: "I recently worked with a SearchMyExpert…",
                description: "I recently worked with a SearchMyExpert for website development and was blown away by their expertise. They helped me to create a beautiful and functional …",
                date_of_experience: "2023-03-28T18:30:00.000Z",
                date: "2023-04-11T17:30:00.000Z",
                rating: 5,
                author: {
                    name: "Avtar Singh"
                }
            },
            {
                title: "I was struggling to gain traction with…",
                description: "I was struggling to gain traction with my digital marketing efforts, but the search my expert helped me to turn things around. They provided me with practical solutions that have had a …",
                date_of_experience: "2023-03-22T18:30:00.000Z",
                date: "2023-03-30T18:30:00.000Z",
                rating: 4,
                author: {
                    name: "Gagan Singh"
                }
            },
            {
                title: "I was struggling to gain traction with…",
                description: "I was struggling to gain traction with my digital marketing efforts, but the search my expert helped me to turn things around. They provided me with practical solutions that have had a …",
                date_of_experience: "2023-03-22T18:30:00.000Z",
                date: "2023-03-28T18:30:00.000Z",
                rating: 1,
                author: {
                    name: "Chaman Singh"
                }
            },
        ]
    };

    const ContactUsData: ContactUsInterface = {
        title: "FREE QUOTATION",
        subtitle: "Get a Free Quotation",
        description: "Don't Worry Your Data and Business Ideas Are Safe With Us.",
        form: {
            f_name: {
                label: "First Name",
                name: "f_name",
                value: "",
            },
            l_name: {
                label: "Last Name",
                name: "l_name",
                value: "",
            },
            mobile: {
                label: "",
                name: "phone",
                value: "",
            },
            email: {
                label: "Email",
                name: "email",
                value: "",
            }
        },
        countries: ['us', 'ca', 'in']
    }

    const FooterData: FooterInterface = {
        logo: "/images/logo_dark.svg",
        countries: [
            {
                name: "India",
                icon: "/images/countries/india.svg",
            },
            {
                name: "United States",
                icon: "/images/countries/usa.svg",
            },
            {
                name: "Canada",
                icon: "/images/countries/canada.svg",
            }
        ],
        links: {
            quick: {
                title: "Quick",
                links: [
                    {
                        title: "Home",
                        href: ""
                    },
                    {
                        title: "About Us",
                        href: ""
                    },
                    {
                        title: "Services",
                        href: ""
                    },
                    {
                        title: "How It Works",
                        href: ""
                    },
                    {
                        title: "Testimonials",
                        href: ""
                    },
                    {
                        title: "Contact Us",
                        href: ""
                    }
                ]
            },
            products: {
                title: "Products",
                links: [
                    {
                        title: "Web Design",
                        href: ""
                    },
                    {
                        title: "Web Development",
                        href: ""
                    },
                    {
                        title: "Social Media",
                        href: ""
                    },
                    {
                        title: "PPC Marketing",
                        href: ""
                    },
                    {
                        title: "SEO",
                        href: ""
                    }
                ]
            },
            resources: {
                title: "Resources",
                links: [
                    {
                        title: "Customer Service",
                        href: ""
                    },
                    {
                        title: "Technical Support",
                        href: ""
                    },
                    {
                        title: "Site Map",
                        href: ""
                    },
                    {
                        title: "Testimonials",
                        href: ""
                    },
                    {
                        title: "FAQ",
                        href: ""
                    },
                    {
                        title: "Newsletter",
                        href: ""
                    }
                ]
            },
            services: {
                title: "Services",
                links: [
                    {
                        title: "Live Chat",
                        href: ""
                    },
                    {
                        title: "Phone Support",
                        href: ""
                    },
                    {
                        title: "Email Support",
                        href: ""
                    },
                    {
                        title: "Knowledge Base",
                        href: ""
                    },
                    {
                        title: "Submit a Ticket",
                        href: ""
                    }
                ]
            }
        },
        legal: {
            title: "Legal",
            address: "2710 Broadway, New York, NY 10025",
            email: "info@searchmyexpert.com",
            phone: "+91 7769970007",
            phone_link: "+917769970007"
        },
        copyRight: "Copyright © 2023 · SearchMyExpert Company · All Rights Reserved"
    }

    return <div>
        <Banner
            header={BannerData.header}
            image={BannerData.image}
            title={BannerData.title}
            subtitle={BannerData.subtitle}
            button={BannerData.button}
            ourClients={BannerData.ourClients}
            awesomeNumbers={BannerData.awesomeNumbers}
            services={BannerData.services}
        />

        <About/>

        <WhyChooseUs
            image={whyChooseUsData.image}
            title={whyChooseUsData.title}
            subtitle={whyChooseUsData.subtitle}
            description={whyChooseUsData.description}
            items={whyChooseUsData.items}
        />

        <HowItWorks
            image={howItWorksData.image}
            title={howItWorksData.title}
            subtitle={howItWorksData.subtitle}
            description={howItWorksData.description}
            items={howItWorksData.items}
        />

        <TrackYourProject
            title={trackYourProjectData.title}
            subtitle={trackYourProjectData.subtitle}
            description={trackYourProjectData.description}
            items={trackYourProjectData.items}
        />

        <StayOnTop
            image={stayOnTopData.image}
            title={stayOnTopData.title}
            subtitle={stayOnTopData.subtitle}
            featured_1={stayOnTopData.featured_1}
            featured_2={stayOnTopData.featured_2}
        />

        <Testimonials
            title={TestimonialsData.title}
            subtitle={TestimonialsData.subtitle}
            description={TestimonialsData.description}
            items={TestimonialsData.items}
        />

        <div
            style={
                {
                    backgroundImage: 'url(/images/footer_bg.png)',
                }
            }
            className="bg-[length:100%_100%] bg-no-repeat bg-top"
        >
            <ContactUs
                title={ContactUsData.title}
                subtitle={ContactUsData.subtitle}
                description={ContactUsData.description}
                form={ContactUsData.form}
                countries={ContactUsData.countries}
            />

            <Footer
                logo={FooterData.logo}
                links={FooterData.links}
                legal={FooterData.legal}
                copyRight={FooterData.copyRight}
                countries={FooterData.countries}
            />

        </div>
    </div>
}

export default Home;