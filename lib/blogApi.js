// Where blog posts come from. Set NEXT_PUBLIC_BLOG_API_URL in the hosting
// environment (and .env.local for local work), e.g.
//   NEXT_PUBLIC_BLOG_API_URL=https://cms.tis.edu.in/api/v1
// It is read at build time, so rebuild/redeploy after changing it.
// Until it is set, the old blog backend is used.
export const BLOG_API_URL = (
  process.env.NEXT_PUBLIC_BLOG_API_URL || "https://blog.tis.edu.in/api/v1"
).replace(/\/+$/, "");
