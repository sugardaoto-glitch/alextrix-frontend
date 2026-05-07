"use client";

import { useState, useEffect, useCallback } from "react";

export function usePersistedState<T>(
  defaultValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }, [key, value]);

  const setPersistedValue: React.Dispatch<React.SetStateAction<T>> =
    useCallback(
      (action) => {
        setValue((prev) => {
          const next =
            typeof action === "function"
              ? (action as (prev: T) => T)(prev)
              : action;
          return next;
        });
      },
      []
    );

  return [value, setPersistedValue];
}
