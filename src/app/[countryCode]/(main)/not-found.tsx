import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Страницата не е намерена</h1>
      <p className="text-small-regular text-ui-fg-base">
      Страницата, която се опитахте да достъпите, не съществува.
      </p>
      <InteractiveLink href="/">Отиди на началната страница</InteractiveLink>
    </div>
  )
}
