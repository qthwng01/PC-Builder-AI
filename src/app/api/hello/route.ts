import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello, NextJS' }, {status: 200})
}
