import React, { useEffect, useState } from "react";
import { homePageInterface } from "@/types";
import data from '@/data/homepage.json';
import { Img } from "@/utils/Img";
import { useRouter } from "next/router";
import Head from "next/head";
import { Input, TextArea } from "@/utils/Input";
import { Title } from "@/utils/Admin/Title";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";

const Admin: React.FC = () => {
    const [params, setParams] = useState<homePageInterface>({
        bannerData: {
            title: data.bannerData.title,
            subtitle: data.bannerData.subtitle,
            header: data.bannerData.header,
            image: data.bannerData.image,
            button: data.bannerData.button,
            ourClients: data.bannerData.ourClients,
            awesomeNumbers: data.bannerData.awesomeNumbers
        },
        serviceData: {
            title: data.serviceData.title,
            subtitle: data.serviceData.subtitle,
            description: data.serviceData.description,
            data: data.serviceData.data
        },
        whyChooseData: {
            title: data.whyChooseData.title,
            subtitle: data.whyChooseData.subtitle,
            description: data.whyChooseData.description,
            items: data.whyChooseData.items
        },
        howItWorksData: {
            image: data.howItWorksData.image,
            title: data.howItWorksData.title,
            subtitle: data.howItWorksData.subtitle,
            description: data.howItWorksData.description,
            items: data.howItWorksData.items
        },
        trackYourProjectData: {
            title: data.trackYourProjectData.title,
            subtitle: data.trackYourProjectData.subtitle,
            description: data.trackYourProjectData.description,
            items: data.trackYourProjectData.items
        },
        stayOnTopData: {
            image: data.stayOnTopData.image,
            title: data.stayOnTopData.title,
            subtitle: data.stayOnTopData.subtitle,
            featured_1: data.stayOnTopData.featured_1,
            featured_2: data.stayOnTopData.featured_2
        },
        testimonialsData: {
            title: data.testimonialData.title,
            subtitle: data.testimonialData.subtitle,
            description: data.testimonialData.description,
            items: data.testimonialData.items
        },
        contactUsData: {
            title: data.contactUsData.title,
            subtitle: data.contactUsData.subtitle,
            description: data.contactUsData.description,
            form: data.contactUsData.form,
            countries: data.contactUsData.countries
        },
        footerData: {
            logo: data.footerData.logo,
            links: data.footerData.links,
            legal: data.footerData.legal,
            countries: data.footerData.countries,
            copyRight: data.footerData.copyRight
        }
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [accordionParams, setAccordionParams] = useState({
    //     banner: false,
    //     service: false,
    //     aboutUs: false,
    //     whyChoose: false,
    //     howItWorks: false,
    //     trackYourProject: false,
    //     stayOnTop: false,
    //     testimonial: false,
    //     contactUs: false,
    // });
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/_l_');
    }

    useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            setIsLoggedIn(true);
        } else {
            router.push('/_l_');
        }
    }, []);

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const data = await response.json();

            if (data.success) {
                alert('Changes saved successfully!');
            } else {
                alert('Error saving changes: ' + data.message);
            }
        } catch (error) {
            alert('Error saving changes: ' + error.message);
        }
    };

    return <>
        <Head>
            <title>Search My Expert - Admin</title>
        </Head>
        <div className="main">
            <div className="bg-[#F5F9FF] min-h-[100vh] flex flex-col">
                <div className="bg-white flex items-center gap-[20px] p-[20px] border-b-2">
                    <div className="flex-1">
                        <Img
                            src="/images/logo_dark.svg"
                            alt="Logo"
                            className="w-[200px]"
                        />
                    </div>
                    <div>
                        <a
                            onClick={logout}
                            className="text-[#FF0000] font-semibold text-[14px] cursor-pointer"
                        >
                            Logout
                        </a>
                    </div>
                </div>
                <div className="flex-1 p-[15px]">
                    <div className="flex gap-[15px]">
                        <div className="flex-1 flex flex-col gap-[20px]">
                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Banner Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.bannerData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Sub Title"
                                            placeholder="Sub Title"
                                            value={params.bannerData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="p-[10px] text-[15px] font-medium border-y-2 text-[#101D2C]">
                                        Our Clients
                                    </h3>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.bannerData.ourClients.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <h3 className="p-[10px] text-[14px] font-medium text-[#101D2C]">
                                        Logos
                                    </h3>
                                    <div className="flex flex-wrap gap-[10px] px-[10px] pb-[10px]">
                                        {
                                            params.bannerData.ourClients.data.map((item, index) => {
                                                return <ImageOverlay
                                                    key={index}
                                                    url={item.image}
                                                    update={() => null}
                                                    onUploadSuccess={(url) => {
                                                        console.log(url)
                                                    }}
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h3 className="p-[10px] text-[15px] font-medium border-y-2 text-[#101D2C]">
                                        Our Awesome Numbers
                                    </h3>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.bannerData.awesomeNumbers.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    {
                                        params.bannerData.awesomeNumbers.data.map((item, index) => {
                                            return <div key={index} className="p-[10px] flex gap-[20px]">
                                                <div className="flex-1">
                                                    <Input
                                                        label={`${item.title} - Title`}
                                                        placeholder={`${item.title} - Title`}
                                                        value={item.title}
                                                        onChange={null}
                                                        className="rounded admin-input"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <Input
                                                        label={`${item.title} - Value`}
                                                        placeholder={`${item.title} - Value`}
                                                        value={item.number}
                                                        onChange={null}
                                                        className="rounded admin-input"
                                                    />
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Our Services Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.serviceData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.serviceData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.serviceData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="p-[10px] text-[15px] font-medium border-y-2 text-[#101D2C]">
                                        Services
                                    </h3>
                                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-[10px] px-[10px] py-[10px]">
                                        {
                                            params.bannerData.ourClients.data.map((item, index) => {
                                                return <div key={index} className="bg-[#000] p-[12px] rounded">
                                                    <Img
                                                        src={item.image}
                                                        alt={index + 1}
                                                        className="w-full"
                                                    />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h3 className="p-[10px] text-[15px] font-medium border-y-2 text-[#101D2C]">
                                        Our Awesome Numbers
                                    </h3>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.bannerData.awesomeNumbers.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    {
                                        params.bannerData.awesomeNumbers.data.map((item, index) => {
                                            return <div key={index} className="p-[10px] flex gap-[20px]">
                                                <div className="flex-1">
                                                    <Input
                                                        label={`${item.title} - Title`}
                                                        placeholder={`${item.title} - Title`}
                                                        value={item.title}
                                                        onChange={null}
                                                        className="rounded admin-input"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <Input
                                                        label={`${item.title} - Value`}
                                                        placeholder={`${item.title} - Value`}
                                                        value={item.number}
                                                        onChange={null}
                                                        className="rounded admin-input"
                                                    />
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="About Us Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.serviceData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.serviceData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.serviceData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Why Us Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.whyChooseData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.whyChooseData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.whyChooseData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="How It Works Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.howItWorksData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.howItWorksData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.howItWorksData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Track Your Project Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.trackYourProjectData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Sub Title"
                                            placeholder="Sub Title"
                                            value={params.trackYourProjectData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.trackYourProjectData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Stay on Top Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.stayOnTopData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Sub Title"
                                            placeholder="Sub Title"
                                            value={params.stayOnTopData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.stayOnTopData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Testimonial Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.testimonialsData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Sub Title"
                                            placeholder="Sub Title"
                                            value={params.testimonialsData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.testimonialsData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Contact Us Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Title"
                                            placeholder="Title"
                                            value={params.contactUsData.title}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Sub Title"
                                            placeholder="Sub Title"
                                            value={params.contactUsData.subtitle}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <TextArea
                                            rows={3}
                                            label="Description"
                                            placeholder="Description"
                                            value={params.contactUsData.description}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded border bg-white">
                                <div>
                                    <Title title="Legal & CopyRight Section"/>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Address"
                                            placeholder="Address"
                                            value={params.footerData.legal.address}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Email"
                                            placeholder="Email"
                                            value={params.footerData.legal.email}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Phone No."
                                            placeholder="Phone No."
                                            value={params.footerData.legal.phone}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                    <div className="p-[10px]">
                                        <Input
                                            label="Copyright"
                                            placeholder="Copyright"
                                            value={params.footerData.copyRight}
                                            onChange={null}
                                            className="rounded admin-input"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex-1 rounded p-[10px] border bg-white">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Admin as _a_;