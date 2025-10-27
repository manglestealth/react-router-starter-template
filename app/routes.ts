import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("app/main", "routes/app.main.tsx"),
  route("fulfillment_order_notification", "routes/fulfillment_order_notification.tsx")
] satisfies RouteConfig;
