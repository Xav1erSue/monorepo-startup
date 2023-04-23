import Loading from "@/pages/Loading"
import NotFound from "@/pages/NotFound"
import { lazy, Suspense } from "react"
import { RouteObject } from "react-router-dom"

const lazyLoad = (factory: () => Promise<any>) => {
  const Module = lazy(factory)
  return (
    <Suspense fallback={<Loading />}>
      <Module />
    </Suspense>
  )
}

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: lazyLoad(() => import("@/pages/Index")),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]
