import Header from "@/Components/Admin/Header";
import Sidebar from "@/Components/Admin/Sidebar";

export default function AdminLayout({ auth, children }) {
    return (
        <div className="min-h-screen bg-gray-200">
            <Sidebar />
            <Header auth={auth} />
            <main className="ml-72 mr-4 bg-blue-200">{children}</main>
        </div>
    );
}
