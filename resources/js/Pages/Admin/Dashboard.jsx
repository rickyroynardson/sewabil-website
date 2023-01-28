import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="description"
                    content="admin dashboard page description"
                />
            </Head>
            <AdminLayout auth={auth}>
                <p>dashbord</p>
            </AdminLayout>
        </>
    );
}
