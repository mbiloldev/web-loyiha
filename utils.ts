/**
 * Utility functions for Kelinchak
 */

/**
 * Combine class names conditionally (lightweight clsx alternative)
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format cook time in minutes to human-readable string
 */
export function formatCookTime(minutes: number): string {
  if (minutes < 60) return `${minutes} daqiqa`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hours} soat`;
  return `${hours} soat ${mins} daqiqa`;
}

/**
 * Difficulty labels in Uzbek
 */
export const difficultyLabels = {
  beginner: "Oson",
  intermediate: "O'rta",
  advanced: "Murakkab",
} as const;

/**
 * Truncate text to a given length
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
