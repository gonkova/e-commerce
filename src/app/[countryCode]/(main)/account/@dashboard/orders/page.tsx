import { Metadata } from "next"

import OrderOverview from "@modules/account/components/order-overview"
import { listCustomerOrders } from "@lib/data"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Orders",
  description: "Overview of your previous orders.",
}

export default async function Orders() {
  const orders = await listCustomerOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Поръчки</h1>
        <p className="text-base-regular">
        Преглед на предходните ви поръчки и тяхното състояние. 
        Също така може да създавате връщания или замени за вашите поръчки при нужда
        </p>
      </div>
      <div>
        <OrderOverview orders={orders} />
      </div>
    </div>
  )
}
