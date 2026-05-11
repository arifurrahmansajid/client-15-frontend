import { createFileRoute } from "@tanstack/react-router";
import Home from "@/components/home-sections/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MyLocalPro Australia — Find trusted local pros in Tasmania" },
      { name: "description", content: "Search and compare trusted local tradespeople and service providers across Hobart, Launceston, Devonport and Burnie." },
    ],
  }),
  component: Home,
});
