import { loadStripe } from "@stripe/stripe-js";

type Option = {
  amount: number;
  key: string;
  mode: "payment" | "subscription";
};

type Row = Option[];

async function stripeRedirect({ key, mode }: Option) {
  const stripe = await loadStripe(
    "pk_live_51JmoNAHBXGNcJIH4gxo89qQcJkMChaQ8jYwuFEx739XwJ02Y4jwydXCytHjxKhvliYZYe4cQSqyLoK4H4Z7ZfKrG00TjNqaeeG"
  );

  const result = await stripe?.redirectToCheckout({
    lineItems: [{ price: key, quantity: 1 }],
    mode: mode,
    successUrl: "https://code4recovery.org/success",
    cancelUrl: "https://code4recovery.org/canceled",
  });

  if (result?.error) {
    console.error(result.error);
  }
}

export function DonationsGrid() {
  const rows: Row[] = [
    [
      {
        amount: 5,
        key: "price_1JtkoTHBXGNcJIH40BxXYI0W",
        mode: "payment",
      },
      {
        amount: 5,
        key: "price_1JtkmWHBXGNcJIH4p9CkMisL",
        mode: "subscription",
      },
      {
        amount: 60,
        key: "price_1JtkJuHBXGNcJIH4M3fKlxCB",
        mode: "subscription",
      },
    ],
    [
      {
        amount: 25,
        key: "price_1JtkoTHBXGNcJIH4jLJjnR0S",
        mode: "payment",
      },
      {
        amount: 25,
        key: "price_1JtkmWHBXGNcJIH4A6Q9ulCB",
        mode: "subscription",
      },
      {
        amount: 120,
        key: "price_1JtkOOHBXGNcJIH4ePCBuh4K",
        mode: "subscription",
      },
    ],
    [
      {
        amount: 50,
        key: "price_1JtkoTHBXGNcJIH4JjUQaRnd",
        mode: "payment",
      },
      {
        amount: 50,
        key: "price_1JtkmWHBXGNcJIH4y5am3SgK",
        mode: "subscription",
      },
    ],
    [
      {
        amount: 100,
        key: "price_1JtkoTHBXGNcJIH461SbDvww",
        mode: "payment",
      },
      {
        amount: 100,
        key: "price_1JtkmWHBXGNcJIH4g50g3fct",
        mode: "subscription",
      },
    ],
  ];
  return (
    <table className="border text-center text-lg">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-3">One-time</th>
          <th className="border p-3">Monthly</th>
          <th className="border p-3">Annual</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, index) => (
          <tr key={index}>
            {cells.map((cell, index) => (
              <td className="border px-3" key={index}>
                <button
                  role="link"
                  className="bg-indigo-400 rounded w-full p-2 text-white hover:bg-indigo-500"
                  onClick={() => stripeRedirect(cell)}
                >
                  ${cell.amount}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
