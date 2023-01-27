import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <Head>
                <title>User</title>
                <meta
                    name="description"
                    content="admin user page description"
                />
            </Head>
            <AdminLayout>
                <p>user page</p>
            </AdminLayout>
        </>
    );
}
