import { Head, Link, usePage } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Users, Building2, Target } from 'lucide-react';
import AppLogoIcon from '@/components/app-logo-icon';
import {
    AdminDashboard,
    AdviserDashboard,
    HteDashboard,
    StudentDashboard,
    home,
    login,
    about,
    contact,
} from '@/routes';

export default function About() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="About">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="bg-background relative flex min-h-screen flex-col items-center">
                {/* Background Image */}
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-25"
                    style={{
                        backgroundImage: 'url(/storage/images/pimentel.jpg)',
                    }}
                />
                {/* Background Overlay */}
                <div className="bg-background/40 dark:bg-background/60 fixed inset-0" />

                {/* Content Container */}
                <div className="text-foreground relative z-10 flex min-h-screen w-full flex-col items-center p-6 lg:justify-center lg:p-8">
                    <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-5xl">
                        <div className="flex w-full items-center justify-between">
                            <Link
                                href={home()}
                                className="flex-shrink-0 transition-opacity hover:opacity-80"
                            >
                                <AppLogoIcon className="h-8 w-auto md:h-10" />
                            </Link>
                            <nav className="flex flex-shrink-0 items-center justify-end gap-2 md:gap-4">
                                {auth.user ? (
                                    <>
                                        {auth.role === 'admin' && (
                                            <Link
                                                href={AdminDashboard()}
                                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                            >
                                                Dashboard
                                            </Link>
                                        )}

                                        {auth.role === 'hte' && (
                                            <Link
                                                href={HteDashboard()}
                                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                            >
                                                Dashboard
                                            </Link>
                                        )}

                                        {auth.role === 'adviser' && (
                                            <Link
                                                href={AdviserDashboard()}
                                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                            >
                                                Dashboard
                                            </Link>
                                        )}

                                        {auth.role === 'student' && (
                                            <Link
                                                href={StudentDashboard()}
                                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                            >
                                                Dashboard
                                            </Link>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="text-foreground hover:border-foreground/20 hover:bg-foreground/5 inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal whitespace-nowrap"
                                        >
                                            Log in
                                        </Link>
                                    </>
                                )}

                                <Link
                                    prefetch
                                    href={about()}
                                    className="text-foreground hover:border-foreground/20 hover:bg-foreground/5 inline-block rounded-sm border border-transparent px-3 py-1.5 text-xs leading-normal whitespace-nowrap md:px-5 md:text-sm"
                                >
                                    About
                                </Link>
                                <Link
                                    prefetch
                                    href={contact()}
                                    className="text-foreground hover:border-foreground/20 hover:bg-foreground/5 inline-block rounded-sm border border-transparent px-3 py-1.5 text-xs leading-normal whitespace-nowrap md:px-5 md:text-sm"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    </header>
                    <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-10">
                        <main className="w-full max-w-[335px] lg:max-w-5xl">
                            <div className="bg-card/40 rounded-br-lg rounded-bl-lg p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_hsl(var(--border))] backdrop-blur-sm lg:rounded-lg lg:p-20">
                                {/* Hero Section */}
                                <div className="mb-12 space-y-6 text-center">
                                    <div className="space-y-2">
                                        <h1 className="text-foreground text-3xl font-bold md:text-4xl">
                                            About InternConnect BSIT
                                        </h1>
                                        <p className="text-muted-foreground text-lg">
                                            Capstone Project
                                        </p>
                                    </div>

                                    <p className="text-md text-foreground text-center leading-relaxed">
                                        InternConnect BulSU is an internship
                                        skills matching system designed to
                                        streamline the process of matching
                                        Bachelor of Science in Information
                                        Technology students with Host Training
                                        Establishments (HTEs).
                                    </p>
                                    <p className="text-md text-foreground text-center leading-relaxed">
                                        Our platform facilitates student
                                        assessments, SIP endorsements, and HTE
                                        placements for the college of Bachelor
                                        of Science in Information Technology at
                                        Bulacan State University.
                                    </p>
                                </div>

                                {/* Features Section */}
                                <div className="space-y-8">
                                    <div className="space-y-4 text-center">
                                        <h2 className="text-foreground text-2xl font-bold md:text-3xl">
                                            Key Features
                                        </h2>
                                        <p className="text-muted-foreground max-w-xxl mx-auto">
                                            Equipping SIP Coordinators, HTEs,
                                            Advisers, and Students with tools to
                                            streamline the internship process
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        <Card className="border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <CardHeader className="pb-3">
                                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10">
                                                    <Users className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    Student Management
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    Comprehensive student
                                                    profiles with competency
                                                    tracking.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <CardHeader className="pb-3">
                                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10">
                                                    <Building2 className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    HTE Integration
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    Integration with Host
                                                    Training Establishments for
                                                    posting opportunities and
                                                    managing placements.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-[#e3e3e0] bg-white dark:border-[#3E3E3A] dark:bg-[#161615]">
                                            <CardHeader className="pb-3">
                                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10">
                                                    <Target className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">
                                                    Smart Matching
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    Weighted scoring algorithm
                                                    that matches students with
                                                    suitable internship
                                                    opportunities.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
