import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const genJyuuGothic = localFont({
	src: "/fonts/GenJyuuGothicL-Normal.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "やわらかITサポート | パソコンやスマホの「ちょっと困った」を気軽に相談できるサービス",
	description:
		"やわらかITサポートはパソコンやスマホの「ちょっと困った」を気軽に相談できるサービスです。",
	openGraph: {
		title:
			"やわらかITサポート | パソコンやスマホの「ちょっと困った」を気軽に相談できるサービス",
		description:
			"パソコンやスマホの「ちょっと困った」を気軽に相談できるサービス",
		url: "https://hinerix.github.io/yawarakaSupport/",
		images: [{ url: "https://hinerix.github.io/yawarakaSupport/images/home/home.png" }],
		siteName: "やわらかITサポート",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="ja"
			className={`scroll-smooth ${genJyuuGothic.className}`}
			suppressHydrationWarning
		>
			<body className="bg-amber-50 text-gray-900 selection:bg-sky-100">
				{children}
			</body>
		</html>
	);
}
