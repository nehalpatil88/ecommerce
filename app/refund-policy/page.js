export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <h1 className="mb-6 text-3xl font-bold text-[#1f1f1f]">
          Refund & Cancellation Policy
        </h1>

        <div className="space-y-5 text-[16px] leading-8 text-gray-700">
          <p>
            At Gruham, we strive to provide high-quality traditional food
            products and ensure customer satisfaction with every order.
          </p>

          <h2 className="text-xl font-semibold text-[#1f1f1f]">
            Order Cancellation
          </h2>
          <p>
            Orders can be cancelled only before they are processed or shipped.
            Once the order has been packed or dispatched, cancellation may not
            be possible.
          </p>

          <h2 className="text-xl font-semibold text-[#1f1f1f]">
            Refund Eligibility
          </h2>
          <p>
            Refunds may be considered only in the following cases:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Product received is damaged during delivery</li>
            <li>Wrong product delivered</li>
            <li>Product is missing from the order</li>
            <li>Payment was deducted but order was not confirmed</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f1f1f]">
            Non-Refundable Cases
          </h2>
          <p>
            Refunds will not be provided for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Change of mind after delivery</li>
            <li>Incorrect address or contact details provided by customer</li>
            <li>
              Delay caused by courier service, natural conditions, or unforeseen
              events
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-[#1f1f1f]">
            Refund Process
          </h2>
          <p>
            To request a refund, please contact us within 24 to 48 hours of
            receiving your order with your order details and product photos if
            applicable. Approved refunds will be processed back to the original
            payment method within 5 to 7 business days.
          </p>

          <h2 className="text-xl font-semibold text-[#1f1f1f]">
            Contact for Support
          </h2>
          <p>
            For any cancellation or refund-related help, please contact our
            support team through the Contact Us page.
          </p>
        </div>
      </div>
    </main>
  );
}