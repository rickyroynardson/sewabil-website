import Header from "@/Components/Header";

export default function MainLayout({ auth, children }) {
    return (
        <div className="min-h-screen">
            <Header auth={auth} />
            <main>{children}</main>
        </div>
    );
}
