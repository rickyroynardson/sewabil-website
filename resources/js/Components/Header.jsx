import { Menu } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import ApplicationLogo from "./ApplicationLogo";
import Container from "./Container";

export default function Header({ auth }) {
    return (
        <header className="border-b-2 border-red-500 p-2">
            <Container className="flex items-center justify-between">
                <Link href="/">
                    <ApplicationLogo className="h-10" />
                </Link>
                {auth.user ? (
                    <Menu as="div" className="relative">
                        <Menu.Button className="inline-flex items-center gap-1">
                            <FiUser />
                            {auth.user.name}
                            <FiChevronDown />
                        </Menu.Button>
                        <Menu.Items className="absolute right-0">
                            {auth.user.is_admin && (
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href={route("admin.dashboard")}>
                                            Dashboard
                                        </Link>
                                    )}
                                </Menu.Item>
                            )}
                            <Menu.Item>
                                {({ active }) => <Link>Profile</Link>}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                ) : (
                    <div className="flex gap-4">
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </div>
                )}
            </Container>
        </header>
    );
}
