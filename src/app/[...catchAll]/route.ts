function handler() {
  return Response.json({ status: 404, error: "Not found" }, { status: 404 });
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
  handler as HEAD,
  handler as OPTIONS,
};
