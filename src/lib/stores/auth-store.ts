"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { delay } from "@/lib/mocks/delay";
import type { OnboardingData, User } from "@/lib/types/auth";

interface StoredCredential {
  email: string;
  passwordHash: string;
  fullName: string;
  emailConfirmedAt?: string;
}

interface AuthState {
  user: User | null;
  isHydrated: boolean;
  onboarding: OnboardingData | null;
  isOnboarded: boolean;
  setHydrated: () => void;
  signup: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<{ needsEmailConfirmation: boolean }>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  confirmEmail: (token: string) => Promise<void>;
  resendConfirmation: (email: string) => Promise<void>;
  updateProfile: (patch: Partial<User>) => void;
  completeOnboarding: (data: OnboardingData) => void;
  saveOnboardingDraft: (data: Partial<OnboardingData>) => void;
}

const USERS_KEY = "alextrix.users";

function fakeHash(password: string): string {
  if (typeof window === "undefined") return password;
  return btoa(unescape(encodeURIComponent(password)));
}

function getUsers(): StoredCredential[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function saveUsers(users: StoredCredential[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isHydrated: false,
      onboarding: null,
      isOnboarded: false,
      setHydrated: () => set({ isHydrated: true }),

      signup: async (email, password, fullName) => {
        await delay(800);
        const users = getUsers();
        const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
        if (existing) {
          throw new Error("Email sudah terdaftar. Silakan masuk atau pakai email lain.");
        }
        users.push({ email, passwordHash: fakeHash(password), fullName });
        saveUsers(users);
        return { needsEmailConfirmation: true };
      },

      login: async (email, password) => {
        await delay(600);
        const users = getUsers();
        const found = users.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === fakeHash(password),
        );
        if (!found) {
          throw new Error("Email atau password tidak cocok. Coba lagi atau klik Lupa password.");
        }
        const user: User = {
          id: nanoid(),
          email: found.email,
          fullName: found.fullName,
          createdAt: new Date().toISOString(),
          emailConfirmedAt: found.emailConfirmedAt ?? new Date().toISOString(),
        };
        set({ user });
      },

      logout: () => {
        set({ user: null, onboarding: null, isOnboarded: false });
      },

      requestPasswordReset: async (_email) => {
        await delay(500);
      },

      resetPassword: async (token, _password) => {
        await delay(500);
        if (token === "expired" || token === "invalid") {
          throw new Error("Link reset password sudah tidak berlaku. Minta link baru.");
        }
      },

      confirmEmail: async (token) => {
        await delay(300);
        if (token === "expired") {
          throw new Error("Link konfirmasi kadaluarsa. Minta link baru.");
        }
        const users = getUsers();
        const user = get().user;
        if (user) {
          const updated = users.map((u) =>
            u.email === user.email ? { ...u, emailConfirmedAt: new Date().toISOString() } : u,
          );
          saveUsers(updated);
          set({ user: { ...user, emailConfirmedAt: new Date().toISOString() } });
        }
      },

      resendConfirmation: async (_email) => {
        await delay(500);
      },

      updateProfile: (patch) => {
        const { user } = get();
        if (!user) return;
        set({ user: { ...user, ...patch } });
      },

      completeOnboarding: (data) => {
        set({ onboarding: data, isOnboarded: true });
      },

      saveOnboardingDraft: (data) => {
        const current = get().onboarding ?? ({} as OnboardingData);
        set({ onboarding: { ...current, ...data } as OnboardingData });
      },
    }),
    {
      name: "alextrix.auth",
      partialize: (state) => ({
        user: state.user,
        onboarding: state.onboarding,
        isOnboarded: state.isOnboarded,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
