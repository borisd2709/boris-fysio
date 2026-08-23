export async function getTestimonials() {
console.log(
"GOOGLE_MAPS_API_KEY:",
process.env.GOOGLE_MAPS_API_KEY
);

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${process.env.GOOGLE_PLACE_ID}&key=${process.env.GOOGLE_MAPS_API_KEY}&language=nl`
  );

  const json = await response.json();

  return json.result.reviews.filter((r: any) => r.text);
}