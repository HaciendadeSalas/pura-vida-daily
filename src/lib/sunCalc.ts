// NOAA solar calculation algorithm for Costa Rica (San José)
const LAT = 9.9281;
const LON = -84.0907;
const UTC_OFFSET = -6;

export function getSunriseSunset(date: Date) {
  const JD = date.getTime() / 86400000 + 2440587.5;
  const T = (JD - 2451545.0) / 36525;

  const L0 = ((280.46646 + T * (36000.76983 + T * 0.0003032)) % 360 + 360) % 360;
  const M = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const Mrad = (M * Math.PI) / 180;

  const C =
    Math.sin(Mrad) * (1.914602 - T * (0.004817 + 0.000014 * T)) +
    Math.sin(2 * Mrad) * (0.019993 - 0.000101 * T) +
    Math.sin(3 * Mrad) * 0.000289;

  const sunLon = L0 + C;
  const omega = 125.04 - 1934.136 * T;
  const lambda = sunLon - 0.00569 - 0.00478 * Math.sin((omega * Math.PI) / 180);

  const epsilon =
    23 +
    (26 +
      (21.448 -
        T * (46.815 + T * (0.00059 - T * 0.001813))) /
        60) /
      60 +
    0.00256 * Math.cos((omega * Math.PI) / 180);

  const sinDec = Math.sin((epsilon * Math.PI) / 180) * Math.sin((lambda * Math.PI) / 180);
  const declination = Math.asin(sinDec) * (180 / Math.PI);

  const y = Math.pow(Math.tan(((epsilon / 2) * Math.PI) / 180), 2);
  const eot =
    4 *
    (180 / Math.PI) *
    (y * Math.sin((2 * L0 * Math.PI) / 180) -
      2 * 0.016708634 * Math.sin(Mrad) +
      4 * 0.016708634 * y * Math.sin(Mrad) * Math.cos((2 * L0 * Math.PI) / 180) -
      0.5 * y * y * Math.sin((4 * L0 * Math.PI) / 180) -
      1.25 * 0.016708634 * 0.016708634 * Math.sin((2 * Mrad)));

  // Solar noon in minutes from midnight UTC
  const solarNoon = 720 - 4 * LON - eot + UTC_OFFSET * 60;

  const latRad = (LAT * Math.PI) / 180;
  const decRad = (declination * Math.PI) / 180;
  const cosHA =
    (Math.cos((90.833 * Math.PI) / 180) - Math.sin(latRad) * Math.sin(decRad)) /
    (Math.cos(latRad) * Math.cos(decRad));

  if (Math.abs(cosHA) > 1) return null;

  const ha = Math.acos(cosHA) * (180 / Math.PI);
  const sunriseMin = solarNoon - 4 * ha;
  const sunsetMin = solarNoon + 4 * ha;

  const fmt = (mins: number) => {
    const m = ((Math.round(mins) % 1440) + 1440) % 1440;
    const h = Math.floor(m / 60);
    const min = m % 60;
    const period = h >= 12 ? "PM" : "AM";
    return `${h % 12 || 12}:${min.toString().padStart(2, "0")} ${period}`;
  };

  const daylightMin = Math.round(ha * 8);
  const goldenStart = fmt(sunsetMin - 35);
  const goldenEnd = fmt(sunsetMin + 5);

  return {
    sunrise: fmt(sunriseMin),
    sunset: fmt(sunsetMin),
    daylight: `${Math.floor(daylightMin / 60)}h ${daylightMin % 60}m`,
    goldenHour: `${goldenStart} – ${goldenEnd}`,
  };
}
