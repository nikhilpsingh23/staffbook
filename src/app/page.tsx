
import Navbar from "./componets/Navbar";
import Categories from "./homepage/categories";
import TopCompanies from "./homepage/companySection";
import LiveChatSection from "./homepage/livechatSection";
import HeroSection from "./homepage/hero";
import JobPostSection from "./homepage/postjobSection";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Categories/>
    <TopCompanies/>
    <LiveChatSection/>
    <JobPostSection/>
    </>
  );
}
