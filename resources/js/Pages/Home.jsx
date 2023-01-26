import Container from "@/Components/Container";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="home page description" />
            </Head>
            <MainLayout>
                <Container>
                    <h1 className="text-3xl">Home</h1>
                </Container>
            </MainLayout>
        </>
    );
}
