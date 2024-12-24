'use client'

import { usePathname } from 'next/navigation'

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    return <div className={pathname !== '/' ? 'pt-[60px] xl:pt-[6.5rem]' : ' xl:pt-[6.5rem]'}>{children}</div>
}
