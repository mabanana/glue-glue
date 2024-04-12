import { HandleRequest, HttpRequest, HttpResponse, Config } from "@fermyon/spin-sdk"

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {
  const sec = Config.get("secret")
  const response = await fetch("https://develop.games", { redirect: "follow" })
  const text = await response.text()
  
  return {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
    body: text
  }
}
