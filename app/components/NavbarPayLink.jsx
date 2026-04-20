// NavbarPayLink.jsx
// Drop this <NavbarPayLink /> component into your existing navbar wherever you
// want the "Pay Now" link to appear. It uses Next.js <Link> so it works with
// the App Router (no full-page reload).
//
// Usage inside your Navbar:
//
//   import NavbarPayLink from '@/components/NavbarPayLink';
//   ...
//   <nav>
//     <NavbarPayLink />
//   </nav>

import Link from 'next/link';

export default function NavbarPayLink({ className }) {
  return (
    <Link
      href="/pay"
      className={
        className ||
        // Default styling – adjust to match your design system
        'inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors'
      }
    >
      {/* Optional icon – remove if you don't use lucide-react */}
      {/* <CreditCard className="h-4 w-4" /> */}
      Pay Now
    </Link>
  );
}


/* ─────────────────────────────────────────────────────────────────────────────
   ALTERNATIVE: if your navbar is a server component but you need an active
   highlight, wrap the link in a tiny client component:

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavbarPayLink() {
  const pathname = usePathname();
  const isActive = pathname === '/pay';

  return (
    <Link
      href="/pay"
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
        isActive
          ? 'bg-blue-700 text-white'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      Pay Now
    </Link>
  );
}
───────────────────────────────────────────────────────────────────────────── */
