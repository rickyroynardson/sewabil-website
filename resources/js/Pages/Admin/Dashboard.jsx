import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="description"
                    content="admin dashboard page description"
                />
            </Head>
            <AdminLayout>
                <p>dashbord</p>
            </AdminLayout>
        </>
    );
}
