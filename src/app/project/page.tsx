'use client';

import Image from "next/image";

const projects = [
  {
    title: "Sistem Manajemen Aset",
    description: "Web untuk pengelolaan aset Astra Graphia berbasis QR Code (Next.js & .NET).",
    images: ["/sma.png", "/slide1.png", "/slide1.png"],
  },
  {
    title: "Portfolio @beandigital.id",
    description: "Akun Instagram retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
    images: ["/beandigital.png", "/slide1.png"],
  },
  {
    title: "Website BEM FSM",
    description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
    images: ["/bemfsm.png", "/slide1.png"],
  },
  {
    title: "Website Wihara KKN",
    description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
    images: ["/wiharasima.png", "/slide1.png"],
  },
  {
    title: "Website Desa Regunung KKN",
    description: "Website retro-Jepang untuk jasa desain, UI/UX dan web statis/dinamis.",
    images: ["/regunung.png", "/slide1.png"],
  },
];

const Project = () => {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 pb-20">
            <div className="relative w-full -mt-1">
                <svg
                    viewBox="0 0 1440 150"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[200px]"
                    preserveAspectRatio="none"
                >
                    <path
                    fill="#1e3a8a"
                    d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,96C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    />
                </svg>
            </div>

            <section className="px-6 lg:px-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center text-shadow-3d-black">
                    My Projects
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm md:text-base">
                    Proyek-proyek terbaik yang pernah saya kerjakan, baik dalam pengembangan web maupun desain UI/UX.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group border card-shadow-3d"
                            >
                            <div className="relative h-48">
                                <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 space-y-2">
                                <h3 className="text-xl font-semibold text-blue-900">{project.title}</h3>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Project;
