import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  const { origin, destination, waypoint } = await req.json()

  const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&waypoints=optimize:true|${waypoint.lat},${waypoint.lng}&mode=driving&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}`)
    .then(res => res.json())

  return NextResponse.json(response)
}
