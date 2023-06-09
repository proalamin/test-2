import React from "react";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { TrackYourProject } from "@/components/TrackYourProject";
import { StayOnTop } from "@/components/StayOnTop";
import { Testimonials } from "@/components/Testimonials";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Comman/Footer";
import { Services } from "@/components/Services";
import data from '@/data/homepage.json';
import services from '@/data/services.json';
import ourClientData from '@/data/clients.json';
import awesomeNumberData from '@/data/awesomeNumbers.json';
import testimonials from '@/data/testimonials.json';
import Head from "next/head";

const Home: React.FC = () => {
    return <>
        <Head>
            <title>
                {data.seoData.title}
            </title>
            <meta name="description" content={data.seoData.description}/>
        </Head>
        <div>
            <Banner
                header={data.bannerData.header}
                image={data.bannerData.image}
                title={data.bannerData.title}
                subtitle={data.bannerData.subtitle}
                button={data.bannerData.button}
                ourClients={ourClientData}
                awesomeNumbers={awesomeNumberData}
            />

            <Services
                title={data.serviceData.title}
                subtitle={data.serviceData.subtitle}
                description={data.serviceData.description}
                data={services}
            />

            <About
                image={data.aboutData.image}
                title={data.aboutData.title}
                subtitle={data.aboutData.subtitle}
                description={data.aboutData.description}
                featured_1={data.aboutData.featured_1}
                featured_2={data.aboutData.featured_2}
            />

            <WhyChooseUs
                title={data.whyChooseData.title}
                subtitle={data.whyChooseData.subtitle}
                description={data.whyChooseData.description}
                items={data.whyChooseData.items}
            />

            <HowItWorks
                image={data.howItWorksData.image}
                title={data.howItWorksData.title}
                subtitle={data.howItWorksData.subtitle}
                description={data.howItWorksData.description}
                items={data.howItWorksData.items}
            />

            <TrackYourProject
                title={data.trackYourProjectData.title}
                subtitle={data.trackYourProjectData.subtitle}
                description={data.trackYourProjectData.description}
                items={data.trackYourProjectData.items}
            />

            <StayOnTop
                image={data.stayOnTopData.image}
                title={data.stayOnTopData.title}
                subtitle={data.stayOnTopData.subtitle}
                featured_1={data.stayOnTopData.featured_1}
                featured_2={data.stayOnTopData.featured_2}
            />

            <Testimonials
                title={data.testimonialData.title}
                subtitle={data.testimonialData.subtitle}
                description={data.testimonialData.description}
                items={testimonials}
            />

            <div
                style={
                    {
                        backgroundImage: 'url(/images/footer_bg.png)',
                    }
                }
                className="md:bg-[length:100%_100%] bg-cover bg-no-repeat bg-top"
            >
                <ContactUs
                    title={data.contactUsData.title}
                    subtitle={data.contactUsData.subtitle}
                    description={data.contactUsData.description}
                    form={data.contactUsData.form}
                    countries={data.contactUsData.countries}
                />

                <Footer
                    links={data.footerData.links}
                    legal={data.footerData.legal}
                    copyRight={data.footerData.copyRight}
                    countries={data.footerData.countries}
                />

            </div>
        </div>
    </>
}

export default Home;