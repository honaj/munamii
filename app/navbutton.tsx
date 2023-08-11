import {FC} from "react";
import Link from "next/link";

interface NavbuttonProps {
    name: string
    link: string
}

const Navbutton: FC<NavbuttonProps> = ({name, link}) => {
    return(
        <Link href={link}>
            <h2 className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-gray-100 hover:text-gray-400">
                {name}
            </h2>
        </Link>
    )
}

export default Navbutton