export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ")
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)
}

export function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 9; hour <= 18; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`)
    if (hour < 18) {
      slots.push(`${hour.toString().padStart(2, "0")}:30`)
    }
  }
  return slots
}
