import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  const { origin, destination, waypoint } = await req.json()

  const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&waypoints=optimize:true|${waypoint.lat},${waypoint.lng}&mode=driving&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}`)
    .then(res => res.json())

  const { distance: { text: firstDistance }, duration: { text: firstDuration } } = response.routes[0].legs[0]
  const { distance: { text: secondDistance }, duration: { text: secondDuration } } = response.routes[0].legs[1]

  const distance = (parseFloat(firstDistance) + parseFloat(secondDistance)).toFixed(1) + 'km'
  const duration = parseFloat(firstDuration) + parseFloat(secondDuration) + 'mins'

  return NextResponse.json({ distance, duration })
}
