import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const contactSchema = z.object({
    churchid: z.number(),
    lastname: z.string().min(1).max(100),
    firstname: z.string().min(1).max(100),
    address1: z.string().min(1).max(100)
});

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = contactSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const NewCustomer = await prisma.contact.create({
        data: { churchid: body.churchid, lastname: body.lastname, firstname: body.firstname, address1: body.address1 }
    });
    return NextResponse.json(NewCustomer, { status: 201 });
}