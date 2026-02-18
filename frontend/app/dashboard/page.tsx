"use client";

import ProtectedRoute from "@/components/protected-route";
import { useAuth } from "@/lib/auth-provider";
import { LogOut, User as UserIcon } from "iconoir-react";

export default function DashboardPage() {
    const { user, signOut } = useAuth();

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-slate-50">
                <nav className="border-b border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                                R
                            </div>
                            <span className="text-lg font-bold text-slate-900">RehabFlow AI</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="hidden text-sm text-slate-600 md:block">{user?.email}</span>
                            <button
                                onClick={signOut}
                                className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="hidden sm:inline">Sign Out</span>
                            </button>
                        </div>
                    </div>
                </nav>

                <main className="mx-auto max-w-7xl p-6">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-slate-900">Recovery Dashboard</h1>
                        <p className="text-slate-600">Track your progress and access your daily plan.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <UserIcon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">My Profile</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                View and update your personal medical information.
                            </p>
                        </div>

                        {/* Placeholder for future cards */}
                        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 opacity-60">
                            <div className="mb-4 h-10 w-10 rounded-lg bg-slate-200"></div>
                            <h3 className="text-lg font-semibold text-slate-700">Daily Assessment</h3>
                            <p className="mt-1 text-sm text-slate-500">Coming soon</p>
                        </div>

                        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 opacity-60">
                            <div className="mb-4 h-10 w-10 rounded-lg bg-slate-200"></div>
                            <h3 className="text-lg font-semibold text-slate-700">Rehab Plan</h3>
                            <p className="mt-1 text-sm text-slate-500">Coming soon</p>
                        </div>
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
}
