import React from 'react'
import Container from "@/components/Container";

const Footer = () => {
    return (
        <header className="mt-12 mb-8">
            <Container className="flex justify-between gap-4">
                <p className="text-sm">
                    Invoicopedia &copy; {new Date().getFullYear()}
                </p>
                <p className="text-sm">
                    Created by Zsombor Pócs with Next.js, Xata and Clerk
                </p>
            </Container>
        </header>
    )
}
export default Footer
