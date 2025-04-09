import { createClient } from "@/lib/supabase/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const supabase = createClient()

        const body = await req.json()

        const { error } = await supabase
            .from("briefs")
            .insert({
                name: body.name,
                niche: body.niche,
                purpose: body.purpose,
                audience: body.audience,
                interaction: body.interaction,
                functionality: body.functionality,
                cost: body.cost,
                deadline: body.deadline,
                examples: body.examples,
                contactName: body.contactPerson,
                contacts: body.contacts,
                addition: body.addition
            })
        if (error) return NextResponse.json({ error: error.message, status: 400 })

        return NextResponse.json({ success: true })
    } catch (e) {
        return NextResponse.json({ error: "Failed adding brief info", details: e instanceof Error ? e.message : String(e) }, { status: 500 })
    }
}