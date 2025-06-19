  import Image from "next/image";
import Carousel from "@/components/dynamic/CarouselImage";
import CarouselCard from "@/components/dynamic/CarouselCard";

export default function Home() {
  const images = [
    "/slide1.png",
    "/slide1.png",
    "/slide1.png"
  ];

  return (
    <div className="">
      <div className="relative w-full ">
        <Carousel images={images} interval={8000} />
        <div className="absolute inset-0 z-20 flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-20 py-32 md:py-44 lg:py-32 text-center lg:text-left space-y-8 lg:space-y-0">
          <div className="text-white space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold">Hello, my name is</h1>
            <h2 className="text-5xl font-extrabold text-blue-950 text-shadow-3d">
              Muhamad Gunawan
            </h2>
            <p className="text-lg text-justify max-w-2xl text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam fugiat accusamus inventore deserunt magni laborum quaerat quas nulla quo iste perferendis sapiente ab quidem tenetur, saepe ut impedit voluptate ad ea! Reiciendis hic odio aspernatur ratione tempore nulla temporibus nostrum eligendi facere! Obcaecati nihil accusantium consectetur quidem, fuga odio maxime.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-10 w-full h-full lg:w-[600px] lg:h-[600px] hover:bg-shadow-3d">
            {["/slide1.png", "/slide1.png", "/gunawan3.png", "/gunawan4.png"].map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Gunawan ${i + 1}`}
                  fill
                  className="object-cover rounded-md border-2 border-white shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="mt-20 w-full px-10 lg:px-20">
        <section id="services" className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-950">💼 Layanan Saya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Branding",
                icon: "/icons/branding.svg", // replace with your local or CDN icon
                desc: "Membangun identitas visual dan strategi brand yang kuat.",
              },
              {
                title: "UI/UX",
                icon: "/icons/uiux.svg", // replace with your local or CDN icon
                desc: "Desain antarmuka pengguna yang menarik dan mudah digunakan.",
              },
              {
                title: "Product Design",
                icon: "/icons/product-design.svg", // replace with your local or CDN icon
                desc: "Perancangan produk digital dari konsep hingga prototipe.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 text-center border hover:shadow-xl transition space-y-4"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mx-auto text-red-500"
                />
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div> */}

      <div className="mt-20 pb-20 w-full px-10 lg:px-20">
        <section id="skills" className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-950">🛠️ Keahlian</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
            {[
              { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
              { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
              { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
              { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
              { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
              { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
              { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
              { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
              { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
              { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
              { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
              { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
              { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center text-blue-900 font-medium border hover:shadow-2xl transition space-y-3"
              >
                <img src={skill.icon} alt={`${skill.name} logo`} className="w-10 h-10" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="pt-2 pb-20 w-full px-10 lg:px-20 bg-blue-950 ">
        <section id="projects" className="space-y-6 mt-20">
          <h2 className="text-3xl font-bold text-white">📁 Pengalaman Proyek</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sistem Manajemen Aset",
                description: "Web untuk pengelolaan aset Astra Graphia berbasis QR Code (Next.js & .NET).",
                images: ["/slide1.png", "/slide1.png", "/slide1.png"],
              },
              {
                title: "CafePOS",
                description: "Aplikasi kasir Laravel & React untuk transaksi, struk, dan manajemen stok.",
                images: ["/slide1.png", "/slide1.png"],
              },
              {
                title: "Portfolio @beandigital.id",
                description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
                images: ["/slide1.png", "/slide1.png"],
              },
              {
                title: "Portfolio @beandigital.id",
                description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
                images: ["/slide1.png", "/slide1.png"],
              },
              {
                title: "Portfolio @beandigital.id",
                description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
                images: ["/slide1.png", "/slide1.png"],
              },
              {
                title: "Portfolio @beandigital.id",
                description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
                images: ["/slide1.png", "/slide1.png"],
              },
            ].map((project, i) => (
              <CarouselCard
                key={i}
                title={project.title}
                description={project.description}
                images={project.images}
              />
            ))}
          </div>
          <button className="bg-white p-4 rounded-xl card-shadow-3d font-bold text-blue-950">
            <a href="/project">
              See My Project
            </a>
          </button>
        </section>
      </div>

      <div className="mt-20 pb-20 w-full px-10 lg:px-20">
        <section id="others" className="space-y-6 mt-20">
          <h2 className="text-3xl font-bold text-blue-950">🎓 Lainnya</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Kepala Biro Humas BEM FSM UNDIP",
              "Asisten Lab Jaringan Komputer UNDIP",
              "Magang di Astragraphia BSD Kota Tangerang",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition"
              >
                <p className="text-gray-800 text-base">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>

  );
}
