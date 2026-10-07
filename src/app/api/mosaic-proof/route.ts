import { NextResponse } from "next/server";
import { CHAIN_NAME, CONTRACT_ADDRESS, GENLAYER_ENDPOINT } from "@/lib/genlayer/config";
import { verifyContractSchema } from "@/lib/genlayer/contract";

export const dynamic = "force-dynamic";

export async function GET() {
  const schema = await verifyContractSchema();
  return NextResponse.json({
    healthy: schema.ok,
    chain_id: 61999,
    chain: CHAIN_NAME,
    contract: CONTRACT_ADDRESS ?? null,
    endpoint: GENLAYER_ENDPOINT,
    schema_verified: schema.ok,
    git_sha: process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.GIT_COMMIT_SHA ?? "unknown",
  });
}
