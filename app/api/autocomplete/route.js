import { NextResponse } from "next/server";

export async function GET(Request) {
  const APIKEY = process.env.GOOGLE_MAPS_API;
  const resObj = { key: APIKEY, test: "test" };
  return NextResponse.json(resObj);
}
