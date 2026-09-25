export async function checkGoogleMaps() {
  const key = process.env.GOOGLE_MAPS_API_KEY ?? process.env.GOOGLE_API_KEY ?? "";
  if (!key) {
    return {
      configured: false,
      message: "Set GOOGLE_MAPS_API_KEY on the server to enable Google Maps geocoding. The key never ships to the browser.",
    };
  }

  const query = encodeURIComponent("Lahore, Pakistan");
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${key}`);
  const data = (await res.json()) as { status?: string; results?: { formatted_address?: string }[] };
  return {
    configured: true,
    googleStatus: data.status ?? "UNKNOWN",
    address: data.results?.[0]?.formatted_address ?? null,
  };
}
