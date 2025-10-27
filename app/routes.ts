import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("app/main", "routes/app.main.tsx"),
] satisfies RouteConfig;
