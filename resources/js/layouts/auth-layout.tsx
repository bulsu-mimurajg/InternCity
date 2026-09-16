import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({
    title = '',
    description = '',
    wide = false,
    children,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
    wide?: boolean;
}) {
    return (
        <AuthLayoutTemplate title={title} description={description} wide={wide}>
            {children}
        </AuthLayoutTemplate>
    );
}
