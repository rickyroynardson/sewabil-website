import { Link } from "@inertiajs/react";
import { FiUser } from "react-icons/fi";

export default function Header({ auth }) {
    return (
        <div className="ml-72 h-24 pr-4 py-4">
            <div className="w-full h-full flex items-center justify-between rounded-2xl px-4 py-2 bg-white">
                <div className="flex items-center gap-2">
                    <FiUser />
                    {auth.user.name}
                </div>
                <Link href={route("logout")} method="post" as="button">
                    Logout
                </Link>
            </div>
        </div>
    );
}
