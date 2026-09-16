import { Link, usePage } from '@inertiajs/react';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import type { NavGroup, NavItem } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';
import React, { useEffect, useRef, useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { Collapsible } from '@radix-ui/react-collapsible';
import {
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDownIcon } from 'lucide-react';

export function NavMain({
    items = [],
    groups = [],
    role,
}: {
    items?: NavItem[];
    groups?: NavGroup[];
    role?: string;
}) {
    const page = usePage();
    const { state } = useSidebar();
    const isMobile = useIsMobile();
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
        {},
    );

    // Get current URL safely
    const currentUrl = page.url || window.location.pathname;
    const isCollapsed = state === 'collapsed';
    const shouldShowTooltip = isCollapsed && !isMobile;

    // Get role-based group label
    const getRoleLabel = (role?: string) => {
        switch (role) {
            case 'admin':
                return 'Administrator';
            case 'hte':
                return 'Host Training Establishment';
            case 'adviser':
                return 'Adviser';
            case 'student':
                return 'Student';
            default:
                return 'Main Menu';
        }
    };

    // Track if we've initialized sections to prevent infinite loops
    const hasInitialized = useRef(false);
    const lastUrl = useRef(currentUrl);

    // Initialize open sections based on current URL
    useEffect(() => {
        // Only run if URL has changed, or we haven't initialized yet
        if (!hasInitialized.current || lastUrl.current !== currentUrl) {
            const newOpenSections: Record<string, boolean> = {};

            // Handle single items array
            items.forEach((item) => {
                if (item.subNav) {
                    newOpenSections[item.title] = currentUrl.startsWith(
                        item.href as string,
                    );
                }
            });

            // Handle grouped navigation
            groups.forEach((group) => {
                group.items.forEach((item) => {
                    if (item.subNav) {
                        newOpenSections[item.title] = currentUrl.startsWith(
                            item.href as string,
                        );
                    }
                });
            });

            setOpenSections(newOpenSections);
            hasInitialized.current = true;
            lastUrl.current = currentUrl;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUrl]);

    // Toggle section open/close
    const toggleSection = (title: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    // Helper function to render navigation items
    const renderNavItems = (navItems: NavItem[]) => {
        return navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
                {item.subNav ? (
                    shouldShowTooltip ? (
                        // When collapsed on desktop, show tooltip with subNav items
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarMenuButton
                                        isActive={
                                            currentUrl.startsWith(
                                                item.href as string,
                                            ) ||
                                            item.subNav.some(
                                                (sub) =>
                                                    currentUrl === sub.href,
                                            )
                                        }
                                        className="w-full"
                                    >
                                        {item.icon && (
                                            <Icon
                                                iconNode={item.icon}
                                                className="h-4 w-4"
                                            />
                                        )}
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="p-2">
                                    <div className="space-y-1">
                                        <div className="text-sm font-medium">
                                            {item.title}
                                        </div>
                                        <div className="space-y-1">
                                            {item.subNav.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className={cn(
                                                        'hover:bg-accent hover:text-accent-foreground block rounded px-2 py-1 text-xs transition-colors',
                                                        currentUrl ===
                                                            subItem.href &&
                                                            'bg-accent text-accent-foreground',
                                                    )}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (
                        // When expanded, show normal collapsible menu
                        <Collapsible
                            open={openSections[item.title]}
                            onOpenChange={(open) =>
                                setOpenSections((prev) => ({
                                    ...prev,
                                    [item.title]: open,
                                }))
                            }
                        >
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton
                                    isActive={currentUrl.startsWith(
                                        item.href as string,
                                    )}
                                    tooltip={{ children: item.title }}
                                    onClick={(e) =>
                                        toggleSection(item.title, e)
                                    }
                                    className="w-full justify-between"
                                >
                                    <div className="flex items-center">
                                        {item.icon && (
                                            <Icon
                                                iconNode={item.icon}
                                                className="mr-2 h-4 w-4"
                                            />
                                        )}
                                        <span>{item.title}</span>
                                    </div>
                                    <ChevronDownIcon
                                        className={cn(
                                            'ml-auto transition-transform duration-200',
                                            openSections[item.title]
                                                ? 'rotate-180'
                                                : '',
                                        )}
                                    />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <div className="ml-3 pl-2">
                                    <SidebarMenu>
                                        {item.subNav.map((subItem) => (
                                            <SidebarMenuItem
                                                key={subItem.title}
                                            >
                                                <SidebarMenuButton
                                                    asChild
                                                    isActive={
                                                        currentUrl ===
                                                        subItem.href
                                                    }
                                                    className="hover:bg-sidebar-accent/50 h-8 text-sm font-normal"
                                                >
                                                    <Link
                                                        href={subItem.href}
                                                        prefetch
                                                    >
                                                        <span className="text-sidebar-foreground/80">
                                                            {subItem.title}
                                                        </span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    )
                ) : (
                    <SidebarMenuButton
                        asChild
                        isActive={currentUrl.startsWith(item.href as string)}
                        tooltip={{ children: item.title }}
                    >
                        <Link href={item.href} prefetch>
                            {item.icon && (
                                <Icon
                                    iconNode={item.icon}
                                    className="h-4 w-4"
                                />
                            )}
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                )}
            </SidebarMenuItem>
        ));
    };

    // If we have groups, render them with separate group labels
    if (groups.length > 0) {
        return (
            <>
                {groups.map((group, groupIndex) => (
                    <SidebarGroup key={groupIndex} className="px-2 py-0">
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarMenu>
                            {renderNavItems(groups[groupIndex]?.items || [])}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </>
        );
    }

    // Otherwise, render single group with role-based label
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{getRoleLabel(role)}</SidebarGroupLabel>
            <SidebarMenu>{renderNavItems(items)}</SidebarMenu>
        </SidebarGroup>
    );
}
