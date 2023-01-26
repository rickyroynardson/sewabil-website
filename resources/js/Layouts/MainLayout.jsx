import Header from "@/Components/Header";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen">
            <Header />
            <main>{children}</main>
        </div>
    );
}
