//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextResponse } from 'next/server'
import openAIService from '@/ultis/openAIService'

export async function POST(req: Request) {
  try {
    const { budget, type }: any = await req.json()
    if (budget && type.toLowerCase() === 'office') {
      const result = await openAIService(budget, 'office')
      return NextResponse.json({ result }, { status: 200 })
    } else if (budget && type.toLowerCase() === 'gaming') {
      const result = await openAIService(budget, 'gaming')
      return NextResponse.json({ result }, { status: 200 })
    } else {
      return NextResponse.json({}, { status: 404 })
    }
  } catch (e) {
    return NextResponse.json({ status: 500 })
  }
}
