Deno.serve(async (req) => {
  const url = new URL(req.url).searchParams.get("url");
  if (!url) return new Response("Missing url", { status: 400 });
  const res = await fetch(url);
  return new Response(res.body, { headers: { "Access-Control-Allow-Origin": "*" } });
});
