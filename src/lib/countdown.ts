// Costa Rica sits at a fixed UTC-6 offset year-round (no DST), so the
// arrival threshold and the CR calendar date can both be computed with
// a plain 6-hour shift instead of a timezone library.
const CR_OFFSET_MS = 6 * 60 * 60 * 1000;
function crCalendarDayMs(d: Date) {
  const crWall = new Date(d.getTime() - CR_OFFSET_MS);
  return Date.UTC(crWall.getUTCFullYear(), crWall.getUTCMonth(), crWall.getUTCDate());
}

export const COUNTDOWN_TARGET = new Date("2026-10-05T12:00:00-06:00");

export function isArrived(now: Date) {
  return now.getTime() >= COUNTDOWN_TARGET.getTime();
}

// Day 1 = the CR calendar date of arrival (Oct 5), even though landing
// itself happens mid-day — so this counts calendar days, not 24h windows
// since the noon threshold.
export function calcDayNumber(now: Date) {
  return Math.floor((crCalendarDayMs(now) - crCalendarDayMs(COUNTDOWN_TARGET)) / (1000 * 60 * 60 * 24)) + 1;
}

export interface CountdownState {
  arrived: boolean;
  dayNumber: number | null;
  days: number;
  hours: number;
  mins: number;
}

export function getCountdown(now: Date): CountdownState {
  const arrived = isArrived(now);
  const diff = Math.max(0, COUNTDOWN_TARGET.getTime() - now.getTime());
  return {
    arrived,
    dayNumber: arrived ? calcDayNumber(now) : null,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  };
}
