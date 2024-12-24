import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Markepto',
    short_name: 'Markepto',
    description: 'Markepto',
    start_url: '/',
    display: 'standalone',
    background_color: '#232426',
    theme_color: '#232426',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
