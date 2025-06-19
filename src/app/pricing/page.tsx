import Carousel from "@/components/dynamic/CarouselImage";
import PricingCard from "./pricingcomponents/PricingCard";

const Pricing = () => {
  return (
    <div>
      <div className="relative w-full">
        <Carousel images={["/slide1.png"]} />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 lg:px-20 py-32 md:py-44 lg:py-32 text-center space-y-6">
          <div className="text-white space-y-4 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-shadow-3d-black">My Pricing</h1>
            <p className="text-sm md:text-base text-justify text-white">
              Halo! Saya Muhamad Gunawan, seorang pengembang perangkat lunak yang antusias dan
              berpengalaman dalam membangun solusi digital modern dan responsif. Dengan latar
              belakang pendidikan di bidang Informatika, saya memiliki keahlian di berbagai teknologi
              seperti Next.js, Laravel, Flutter, .NET, serta penguasaan dalam desain UI/UX yang
              berfokus pada pengalaman pengguna.
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-[-70rem] sm:bottom-[-30rem] md:bottom-[-30rem] lg:bottom-[-10rem] transform -translate-x-1/2 z-30 w-full px-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg sm:max-w-xl lg:max-w-[90rem] mx-auto text-center border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                title="Basic Website"
                price="Rp 1.000.000"
                features={["1-3 Pages", "Responsive Design", "Static Website", "Contact Form", "Free Hosting Setup"]}
                ctaText="Pesan Sekarang"
                ctaLink="https://wa.me/6285959913761?text=Halo%20saya%20ingin%20memesan%20Basic%20Website"
              />
              <PricingCard
                title="Dynamic Website"
                price="Rp 2.500.000"
                features={["Login System", "Admin Panel", "Up to 7 Pages", "Blog/News Feature", "Database Integration", "Free Domain + Hosting"]}
                ctaText="Pesan Sekarang"
                ctaLink="https://wa.me/6285959913761?text=Halo%20saya%20ingin%20memesan%20Dynamic%20Website"
              />
              <PricingCard
                title="Mobile App"
                price="Rp 4.000.000"
                features={["Cross-platform Flutter", "UI/UX Design", "API Integration", "Admin Dashboard", "Free Maintenance"]}
                ctaText="Pesan Sekarang"
                ctaLink="https://wa.me/6285959913761?text=Halo%20saya%20ingin%20memesan%20Mobile%20App"
              />
              <PricingCard
                title="UI/UX Design"
                price="Rp 750.000"
                features={["Custom UI Design", "UX Research", "Mobile & Web", "Figma File", "Prototyping", "2x Revisions"]}
                ctaText="Pesan Sekarang"
                ctaLink="https://wa.me/6285959913761?text=Halo%20saya%20ingin%20memesan%20layanan%20UI%2FUX%20Design"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[75rem] sm:h-[50rem] md:h-[40rem] lg:h-[16rem] bg-gray-100 w-full" />
    </div>
  );
};

export default Pricing;
