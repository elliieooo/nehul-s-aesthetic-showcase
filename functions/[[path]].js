import handler from "../dist/server/server.js";

export const onRequest = async (context) => {
  return handler.fetch(context.request, context.env, context);
};
