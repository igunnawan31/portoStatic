import Link from "next/link";
import { Github, Linkedin, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left space-y-1">
                <h2 className="text-xl font-semibold">Muhamad Gunawan</h2>
                <p className="text-sm text-white/70">
                    Let&apos;s connect and build something awesome.
                </p>
                </div>

                <div className="flex space-x-5">
                <Link
                    href="https://github.com/igunnawan31"
                    target="_blank"
                    aria-label="GitHub"
                    className="hover:text-blue-300 transition"
                >
                    <Github size={22} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/muhamadgunawan310105"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="hover:text-blue-300 transition"
                >
                    <Linkedin size={22} />
                </Link>
                <Link
                    href="https://instagram.com/igunawan550"
                    target="_blank"
                    aria-label="Instagram"
                    className="hover:text-blue-300 transition"
                >
                    <Instagram size={22} />
                </Link>
                <Link
                    href="https://wa.me/6285959913761"
                    target="_blank"
                    aria-label="WhatsApp"
                    className="hover:text-blue-300 transition"
                >
                    <Phone size={22} />
                </Link>
                <Link
                    href="mailto:igunnawan24@gmail.com"
                    target="_blank"
                    aria-label="Email"
                    className="hover:text-blue-300 transition"
                >
                    <Mail size={22} />
                </Link>
                </div>
            </div>

            <p className="text-center mt-6 text-sm text-white/50">
                &copy; {new Date().getFullYear()} Muhamad Gunawan. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
