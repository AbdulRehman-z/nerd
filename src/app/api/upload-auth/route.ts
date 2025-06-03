import { config } from "@/lib/config"
import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET() {
  // Your application logic to authenticate the user
  // For example, you can check if the user is logged in or has the necessary permissions
  // If the user is not authenticated, you can return an error response
  const { token, expire, signature } = getUploadAuthParams({
    privateKey: config.env.imagekit.privateKey,
    publicKey: config.env.imagekit.publicKey,
    // expire: 30 * 60, // Optional, controls the expiry time of the token in seconds, maximum 1 hour in the future
    // token: "random-token", // Optional, a unique token for requestconfig.imagekit.publicKeyconfig.imagekit.publicKey
  })

  return Response.json({ token, expire, signature, publicKey: config.env.imagekit.publicKey })
}
