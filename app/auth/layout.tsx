"use client"
import Image from 'next/image'
import { ChatIcon } from '@/app/(main)/_components/icon/icon'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	const path = usePathname()

	useEffect(() => {
		// Set background color based on the path
		if (!path?.includes("auth")) {
			document.body.style.backgroundColor = "#1D1D1D";
		} else {
			document.body.style.backgroundColor = "black";
		}

		// Cleanup function to reset the background color
		return () => {
			document.body.style.backgroundColor = ""; // Reset to default
		};
	}, [path]); // Include path as a dependency

	return (
		<div className={'w-full flex bg-background h-full'}>
			{children}

			<div className={"absolute right-7 bottom-14 md:hidden"}>
				<ChatIcon />
			</div>
		</div>
	)
}
