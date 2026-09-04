const SITE_URL = 'https://komvexatech.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/technician-repairing-laptop.png`

export const usePageSeo = (options: { title: string; description: string; path?: string; image?: string }) => {
  const canonical = `${SITE_URL}${options.path || ''}`
  const image = options.image ? `${SITE_URL}${options.image}` : DEFAULT_IMAGE

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: 'index, follow, max-image-preview:large',
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: image,
    ogImageAlt: 'Teknisi KOMVEXA TECH menangani laptop dan komputer',
    ogLocale: 'id_ID',
    siteName: 'KOMVEXA TECH',
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image
  })

  useHead({ link: [{ rel: 'canonical', href: canonical }] })
}
