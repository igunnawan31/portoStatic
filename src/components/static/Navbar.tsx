import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 backdrop-blur-md py-3 rounded-full mx-auto max-w-11/12 flex justify-center mt-5">
            <div className="flex space-x-8">
                {["home", "pricing", "project", "organization"].map((item, index) => {
                    const href = item === "home" ? "/" : `/${item}`;
                    return (
                        <Link key={index} href={href} className="relative group">
                        <span className="text-white text-sm capitalize">
                            {item.replace(/-/g, " ")}
                        </span>
                        <div className="absolute left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;