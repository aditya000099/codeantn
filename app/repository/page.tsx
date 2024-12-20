"use client"

import * as React from "react"
import { RefreshCcw, Plus, Search, Menu } from "lucide-react"
import Image from "next/image"
import {
    CircleStackIcon,
    ArrowRightStartOnRectangleIcon, Bars4Icon,
    ChevronDownIcon,
    CodeBracketIcon,
    HomeIcon, PhoneIcon
} from "@heroicons/react/24/outline"
import {
    BookOpenIcon,
    CloudIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const users = [
    {
        value: "utkarsh",
        label: "UtkarshDhairyaP...",
    },
    {
        value: "Aditya",
        label: "Aditya",
    },
]

const sidebarButtons = [
    {
        label: "Repositories",
        icon: HomeIcon,
        id: "repositories"
    },
    {
        label: "AI Code Review",
        icon: CodeBracketIcon,
        id: "ai-review"
    },
    {
        label: "Cloud Security",
        icon: CloudIcon,
        id: "cloud-security"
    },
    {
        label: "How to Use",
        icon: BookOpenIcon,
        id: "how-to-use"
    },
    {
        label: "Settings",
        icon: Cog6ToothIcon,
        id: "settings"
    },
]

const mockRepos = [
    {
        id: 1,
        name: "design-system",
        isPrivate: false,
        language: "React",
        size: "7320 KB",
        lastUpdated: "1 day ago"
    },
    {
        id: 2,
        name: "codeant-ci-app",
        isPrivate: true,
        language: "Javascript",
        size: "5871 KB",
        lastUpdated: "2 days ago"
    },
    {
        id: 3,
        name: "analytics-dashboard",
        isPrivate: true,
        language: "Python",
        size: "4521 KB",
        lastUpdated: "5 days ago"
    },
    {
        id: 4,
        name: "mobile-app",
        isPrivate: false,
        language: "Swift",
        size: "3096 KB",
        lastUpdated: "3 days ago"
    },
    {
        id: 5,
        name: "e-commerce-platform",
        isPrivate: true,
        language: "Java",
        size: "6210 KB",
        lastUpdated: "6 days ago"
    },
    {
        id: 6,
        name: "blog-website",
        isPrivate: false,
        language: "HTML/CSS",
        size: "1876 KB",
        lastUpdated: "4 days ago"
    },
    {
        id: 7,
        name: "social-network",
        isPrivate: true,
        language: "PHP",
        size: "5432 KB",
        lastUpdated: "7 days ago"
    }
]

const UserDropdown = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedUser, setSelectedUser] = React.useState(users[0])
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-3 py-2 border rounded-md bg-white hover:bg-gray-50"
            >
                <span className="text-sm font-medium">{selectedUser.label}</span>
                <ChevronDownIcon className="h-4 w-4 ml-2 text-gray-500" />
            </button>

            {isOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10">
                    {users.map((user) => (
                        <button
                            key={user.value}
                            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 
                                ${selectedUser.value === user.value ? 'bg-gray-50' : ''}`}
                            onClick={() => {
                                setSelectedUser(user)
                                setIsOpen(false)
                            }}
                        >
                            {user.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

// Add sample components for each tab
const TabComponents = {
    repositories: () => (
        <div className="bg-white rounded-lg border p-0">
            <div className="p-6 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold">Repositories</h1>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                            {mockRepos.length}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                            <RefreshCcw className="h-4 w-4 mr-2" />
                            Refresh
                        </Button>
                        <Button 
                            size="sm" 
                            className="flex-1 md:flex-none bg-blue-600 text-white hover:bg-blue-700"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Repository
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Find a repository..."
                        className="pl-10"
                    />
                </div>
            </div>

            <div className="divide-y divide-gray-200">
                {mockRepos.map((repo) => (
                    <div
                        key={repo.id}
                        className="px-6 py-4 hover:bg-gray-50 w-full"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="font-medium text-blue-600">{repo.name}</div>
                            <span className="text-xs px-2 py-0.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700">
                                {repo.isPrivate ? 'Private' : 'Public'}
                            </span>
                        </div>
                        <div className="text-sm text-gray-900 flex items-center gap-8 w-full">
                            <span className="flex items-center whitespace-nowrap">
                                {repo.language}
                                <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                            </span>
                            <div className="flex items-center gap-2">
                                <CircleStackIcon className="h-4 w-4" />
                                <span className="whitespace-nowrap">{repo.size}</span>
                            </div>
                            <span className="whitespace-nowrap">Updated {repo.lastUpdated}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ),
    "ai-review": () => (
        <div className="bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">AI Code Review</h2>
            <p>AI Code Review dashboard coming soon...</p>
        </div>
    ),
    "cloud-security": () => (
        <div className="bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">Cloud Security</h2>
            <p>Cloud Security monitoring dashboard coming soon...</p>
        </div>
    ),
    "how-to-use": () => (
        <div className="bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <p>Documentation and guides coming soon...</p>
        </div>
    ),
    settings: () => (
        <div className="bg-white rounded-lg border p-6">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>Settings panel coming soon...</p>
        </div>
    ),
}

const RepositoryPage = () => {
    const [selectedTab, setSelectedTab] = React.useState("repositories")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    const TabComponent = TabComponents[selectedTab as keyof typeof TabComponents]

    const MobileMenu = () => (
        <div className={cn(
            "fixed top-16 left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 z-50 md:hidden",
            "flex flex-col",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
        )}>
            <div className="p-4">
                <UserDropdown />
            </div>

            {/* Main Navigation */}
            <div className="flex flex-col px-2 pb-2">
                {sidebarButtons.map((button) => {
                    const Icon = button.icon
                    return (
                        <Button
                            key={button.id}
                            variant="ghost"
                            className={cn(
                                "justify-start rounded-lg w-full font-semibold py-2",
                                selectedTab === button.id 
                                    ? "text-white bg-blue-600 hover:bg-blue-700"
                                    : "hover:bg-gray-100"
                            )}
                            onClick={() => {
                                setSelectedTab(button.id)
                                setIsMobileMenuOpen(false)
                            }}
                        >
                            <Icon className={cn(
                                "h-5 w-5 mr-2 stroke-[1.5px]",
                                selectedTab === button.id ? "text-white" : ""
                            )} />
                            {button.label}
                        </Button>
                    )
                })}
            </div>

            {/* Bottom Actions */}
            <div className="border-t px-2 py-2">
                <Button
                    variant="ghost"
                    className="justify-start rounded-lg w-full text-gray-600 font-semibold hover:bg-gray-100 py-2"
                >
                    <PhoneIcon className="h-5 w-5 mr-2 stroke-[1.5px]" />
                    Support
                </Button>
                <Button
                    variant="ghost"
                    className="justify-start rounded-lg w-full text-gray-600 font-semibold hover:bg-gray-100 py-2"
                >
                    <ArrowRightStartOnRectangleIcon className="h-5 w-5 mr-2 stroke-[1.5px]" />
                    Logout
                </Button>
            </div>
        </div>
    )

    // Desktop Sidebar
    const Sidebar = () => (
        <div className="w-60 border-r p-4 flex flex-col fixed h-screen bg-white hidden md:flex">
            <div className="w-44 mx-auto">
                <Image
                    src="/logo2.png"
                    alt="Profile"
                    width={1280}
                    height={1280}
                />
            </div>

            <div className="mt-4">
                <UserDropdown />
            </div>

            {/* Main Navigation */}
            <div className="flex flex-col mt-4 flex-grow">
                {sidebarButtons.map((button) => {
                    const Icon = button.icon
                    return (
                        <Button
                            key={button.id}
                            variant="ghost"
                            className={cn(
                                "justify-start rounded-lg w-full font-semibold",
                                selectedTab === button.id 
                                    ? "text-white bg-blue-600 hover:bg-blue-700"
                                    : "hover:bg-gray-100"
                            )}
                            onClick={() => setSelectedTab(button.id)}
                        >
                            <Icon className={cn(
                                "h-6 w-6 mr-2 stroke-[1.5px]",
                                selectedTab === button.id ? "text-white" : ""
                            )} />
                            {button.label}
                        </Button>
                    )
                })}
            </div>

            {/* Bottom Actions */}
            <div className="border-t pt-4 mt-auto">
                <Button
                    variant="ghost"
                    className="justify-start rounded-lg w-full text-gray-600 font-semibold hover:bg-gray-100"
                >
                    <PhoneIcon className="h-6 w-6 mr-2 stroke-[1.5px]" />
                    Support
                </Button>
                <Button
                    variant="ghost"
                    className="justify-start rounded-lg w-full text-gray-600 font-semibold hover:bg-gray-100"
                >
                    <ArrowRightStartOnRectangleIcon className="h-6 w-6 mr-2 stroke-[1.5px]" />
                    Logout
                </Button>
            </div>
        </div>
    )

    const MobileHeader = () => (
        <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b flex items-center justify-between px-4 md:hidden z-50">
            <div className="w-32">
                <Image
                    src="/logo2.png"
                    alt="Profile"
                    width={1280}
                    height={1280}
                />
            </div>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <Menu className="h-6 w-6" />
            </Button>
        </div>
    )

    // Add overlay for mobile menu
    const MobileOverlay = () => (
        <div 
            className={cn(
                "fixed inset-0 bg-black/50 z-40 md:hidden",
                isMobileMenuOpen ? "block" : "hidden"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
        />
    )

    return (
        <div className="flex h-screen">
            <MobileOverlay />
            <MobileMenu />
            <Sidebar />
            <MobileHeader />

            {/* Scrollable Content Area */}
            <div className={cn(
                "flex-1 p-4 md:p-6 overflow-auto",
                "md:ml-60", // Desktop margin for sidebar
                "mt-16 md:mt-0" // Mobile margin for header
            )}>
                <TabComponent />
            </div>
        </div>
    )
}

export default RepositoryPage;