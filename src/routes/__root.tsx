import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashLoader } from "@/components/layout/SplashLoader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient px-4">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 max-w-md text-center">
        <div className="text-8xl font-black text-[#097DDD]/30 mb-2">404</div>
        <h1 className="text-3xl font-black text-white mb-3">Page not found</h1>
        <p className="text-[#E4EAF1]/55 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="shine-btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#097DDD] px-7 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_4px_20px_rgb(9,125,221,0.4)] hover:bg-[#0a8ef0] transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MyLocalPro Australia — Find trusted local trades & services" },
      { name: "description", content: "Find trusted local tradespeople and service providers across Tasmania. Plumbers, electricians, cleaners, gardeners and more." },
      { name: "author", content: "MyLocalPro Australia" },
      { property: "og:title", content: "MyLocalPro Australia — Find trusted local trades & services" },
      { property: "og:description", content: "The simple way to find trusted local pros across Tasmania." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      {/* Splash screen — shows once on initial load */}
      <SplashLoader />

      {isAdmin ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className={`flex-1 ${pathname === "/" ? "" : "pt-[72px]"}`}>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </QueryClientProvider>
  );
}
