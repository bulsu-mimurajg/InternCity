import AppLogoIcon from '@/components/app-logo-icon';
import { Head, Link, usePage } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, BriefcaseBusinessIcon, SquareKanbanIcon, NotepadTextIcon } from 'lucide-react';
import {AdminDashboard, AdviserDashboard, HteDashboard, StudentDashboard, home, login, about, contact} from "@/routes";

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center relative bg-background">
                {/* Background Image */}
                <div
                    className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:opacity-25"
                    style={{backgroundImage: 'url(/storage/images/pimentel.jpg)'}}
                />
                {/* Background Overlay */}
                <div className="fixed inset-0 bg-background/40 dark:bg-background/60" />

                {/* Content Container */}
                <div className="relative z-10 flex min-h-screen flex-col items-center p-6 text-foreground lg:justify-center lg:p-8 w-full">
                    <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-5xl">
                        <div className="flex items-center justify-between w-full">
                            <Link href={home()} className="hover:opacity-80 transition-opacity flex-shrink-0">
                                <AppLogoIcon className="h-8 w-auto md:h-10" />
                            </Link>
                            <nav className="flex items-center justify-end gap-2 md:gap-4 flex-shrink-0">
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
                                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-foreground hover:border-foreground/20 hover:bg-foreground/5 whitespace-nowrap"
                                        >
                                            Log in
                                        </Link>
                                    </>
                                )}

                                <Link
                                    prefetch
                                    href={about()}
                                    className="inline-block rounded-sm border border-transparent px-3 md:px-5 py-1.5 text-xs md:text-sm leading-normal text-foreground hover:border-foreground/20 hover:bg-foreground/5 whitespace-nowrap"
                                >
                                    About
                                </Link>
                                <Link
                                    prefetch
                                    href={contact()}
                                    className="inline-block rounded-sm border border-transparent px-3 md:px-5 py-1.5 text-xs md:text-sm leading-normal text-foreground hover:border-foreground/20 hover:bg-foreground/5 whitespace-nowrap"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    </header>                    <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-10">
                        <main className="w-full max-w-[335px] lg:max-w-5xl">
                            <div className="rounded-br-lg rounded-bl-lg bg-card/40 backdrop-blur-sm p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_hsl(var(--border))] lg:rounded-lg lg:p-20">
                                {/* Hero Section */}
                                <div className="text-center space-y-6 mb-12">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                                            Welcome to InternCity
                                        </h1>
                                        <p className="text-muted-foreground text-lg">
                                            Streamlining the Internship Process for students of <br /> Bachelor of Science in Information Technology
                                        </p>
                                    </div>
                                </div>

                                {/* How It Works Section */}
                                <div className="space-y-8 mb-12">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">How It Works</h2>
                                        <p className="text-muted-foreground">
                                            Simple steps to find your perfect internship match
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <Card className="bg-white dark:bg-[#161615] border-[#e3e3e0] dark:border-[#3E3E3A]">
                                            <CardHeader className="pb-3">
                                                <div className="h-10 w-10 rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10 flex items-center justify-center mb-3">
                                                    <NotepadTextIcon className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">1. Assessment</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    Students complete skill assessments across various IT competencies.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>

                                        <Card className="bg-white dark:bg-[#161615] border-[#e3e3e0] dark:border-[#3E3E3A]">
                                            <CardHeader className="pb-3">
                                                <div className="h-10 w-10 rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10 flex items-center justify-center mb-3">
                                                    <SquareKanbanIcon className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">2. Matching</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    Our deterministic weighted scoring algorithm analyzes skills to match students with suitable HTEs.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>

                                        <Card className="bg-white dark:bg-[#161615] border-[#e3e3e0] dark:border-[#3E3E3A]">
                                            <CardHeader className="pb-3">
                                                <div className="h-10 w-10 rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10 flex items-center justify-center mb-3">
                                                    <UserCheck className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">3. Endorsement</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    The SIP Coordinator endorses students for HTE's to review and place.
                                                </CardDescription>
                                            </CardContent>
                                        </Card>

                                        <Card className="bg-white dark:bg-[#161615] border-[#e3e3e0] dark:border-[#3E3E3A]">
                                            <CardHeader className="pb-3">
                                                <div className="h-10 w-10 rounded-lg bg-[#f53003]/10 dark:bg-[#FF4433]/10 flex items-center justify-center mb-3">
                                                    <BriefcaseBusinessIcon className="h-5 w-5 text-[#f53003] dark:text-[#FF4433]" />
                                                </div>
                                                <CardTitle className="text-lg text-[#1b1b18] dark:text-[#EDEDEC]">4. Placement</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <CardDescription className="text-[#706f6c] dark:text-[#A1A09A]">
                                                    Students are placed with their matched HTEs to begin their internship journey and gain experience.
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
