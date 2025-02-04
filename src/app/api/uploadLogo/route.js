import dbConnection from "@/config/dbConnection";
import logoModel from "@/models/logoModel";
import { NextResponse } from "next/server";

export async function POST(req) {

    await dbConnection()

    try {
        const url = await req.json(); // Parse the incoming JSON data

        // Validate the incoming data
        if (!url) {
            return NextResponse.json(
                { message: "Missing required fields." },
                { status: 400 }
            );
        }

        // Save the news to the database (mocked here)
        const result = await logoModel({
            url: url,
        });

        // save in the mongo db
        await result.save();

        return new NextResponse(JSON.stringify({message : "Success"}), { status: 201 });

    } catch (error) {
        console.error("Error adding user request:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}