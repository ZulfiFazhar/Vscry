import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const MenuItem = ({ path, name }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`font-medium w-full ${
        isActive ? "font-bold primary" : "text-white"
      }`}
    >
      {name}
    </Link>
  );
};

export default MenuItem;
