import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/shared/Header';
import CustomerChat from '@/components/chat/CustomerChat';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'The 1% Training Plan',
    description: 'The elite architecture for 1% performance in Weightlifting and Gymnastics.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <Header />
                    {children}
                    <CustomerChat />
                </AuthProvider>
            </body>
        </html>
    );
}
