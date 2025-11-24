export function toList(content: unknown): unknown[] {
  if (Array.isArray(content)) return content;
  if (typeof content === 'object' && content !== null) {
    const obj = content as Record<string, unknown>;
    if (Array.isArray(obj.items)) return obj.items;
    if (Array.isArray(obj.data)) return obj.data;
  }
  return content ? [content] : [];
}

export function ok(body: unknown) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export function error(message: string, status = 500) {
  return new Response(JSON.stringify({ success: false, message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
