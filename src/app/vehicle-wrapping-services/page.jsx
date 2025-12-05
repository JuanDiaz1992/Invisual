import AdditionalServicesSection from "../components/ServicesComponents/serviceList";
import Banner from "../components/ServicesComponents/banner";
import CtaForm from "../components/ServicesComponents/ctaForm";
import CustomerSatisfaction from "../components/ServicesComponents/customerSatisfaction";
import HowItWorks from "../components/ServicesComponents/howItWorks";
import Warranty from "../components/ServicesComponents/warranty";
import Certified from "../components/ServicesComponents/certified";
import CommercialVehicleWrap from "../components/ServicesComponents/commercialVehicleWrap";
import FleetWrap from "../components/ServicesComponents/fleetWrap";
import WrapVending from "../components/ServicesComponents/wrapVending";
import TypesOfVehicleWrap from "../components/HomeComponents/typesOfVehicleWrap";
import Cta from "../components/ServicesComponents/cta";
import AdditionalServices from "../components/ServicesComponents/additionalServices";
import GraphicDesign from "../components/ServicesComponents/graphicDesign";
import Results from "../components/ServicesComponents/results";

export const metadata = {
  title: "Commercial Vehicle Wraps & Fleet Branding Services | InVisual Signs",
  description:
    "Comprehensive branding solutions: Fleet wraps, commercial vehicle graphics, vending machine wraps, and custom graphic design. 3M & Avery Dennison certified installers.",
  keywords: [
    "Fleet Wraps",
    "Commercial Vehicle Graphics",
    "Vending Machine Wraps",
    "Car Color Change",
    "Vinyl Installation",
    "Graphic Design Services",
    "3M Certified Installer",
  ],
  openGraph: {
    title: "Premium Vehicle Wraps & Custom Branding Services",
    description:
      "From single commercial vehicles to entire fleets. We offer design, printing, and certified installation for wraps, signs, and more.",
    url: "https://invisualsign.com/vehicle-wrapping-services",
    siteName: "InVisual Signs",
    images: [
      {
        url: "https://invisualsign.com/images/commercial-vehicle-wraps.webp",
        width: 1200,
        height: 630,
        alt: "Commercial Vehicle Wraps by InVisual Signs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const VehicleWrappingServicesPage = () => {
  return (
    <>
      <Banner />

      <AdditionalServicesSection />

      <CtaForm />

      <CustomerSatisfaction />

      <HowItWorks />

      <Warranty />

      <Certified />

      <CommercialVehicleWrap />

      <FleetWrap />

      <WrapVending />

      <TypesOfVehicleWrap />

      <Cta />

      <AdditionalServices />

      <GraphicDesign />

      <Results />
    </>
  );
};

export default VehicleWrappingServicesPage;
