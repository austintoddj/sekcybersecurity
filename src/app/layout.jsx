import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'SEK Cybersecurity',
    default: 'SEK Cybersecurity | Helping DoD contractors achieve and maintain CMMC, RMF, and FedRAMP compliance with confidence.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
