import HeroBanner from "../components/HomeComponents/heroBanner";
import Services from "../components/HomeComponents/services";
import CustomerSatisfaction from "../components/HomeComponents/customerSatisfaction";
import WhyChose from "../components/HomeComponents/whyChoose";
import Benefits from "../components/HomeComponents/benefits";
import GraphicDesign from "../components/HomeComponents/graphicDesign";
import AdditionalServices from "../components/HomeComponents/additionalServices";
import CtaContactForm from "../components/HomeComponents/ctaContactForm";
import TypesOfVehicleWrap from "../components/HomeComponents/typesOfVehicleWrap";
import VehiclesThatCanBeWrappe from "../components/HomeComponents/vehiclesThatCanBeWrappe";
import ScrollSpyMenu from "../components/asideMenu";

export const metadata = {
  title: "InVisual Signs | Vehicle Wraps & Commercial Branding Services",
  description: "Transform your vehicles into moving billboards with InVisual Signs. Expert commercial wraps, decals, and custom branding installation. Get a quote today!",
  keywords: ["Vehicle Wraps", "Commercial Wraps", "Car Branding", "Vinyl Installation", "InVisual Signs"],
  openGraph: {
    title: "InVisual Signs | Expert Vehicle Wraps",
    description: "Turn heads everywhere you go. Premium materials and expert installation for your fleet.",
    url: 'https://invisualsign.com',
    siteName: 'InVisual Signs',
    images: [
      {
        url: 'https://invisualsign.com/images/og-image-home.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroBanner />

      <Services />

      <CustomerSatisfaction />

      <WhyChose />

      <Benefits />

      <GraphicDesign />

      <AdditionalServices />

      <CtaContactForm />

      <TypesOfVehicleWrap />

      <VehiclesThatCanBeWrappe />

      <ScrollSpyMenu />
    </main>
  );
}
