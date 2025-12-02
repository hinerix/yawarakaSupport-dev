"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Privacy from "@/components/terms/Privacy";
import Specified from "@/components/terms/Specified";
import Tos from "@/components/terms/Tos";

export default function TermsContent() {
	const searchParams = useSearchParams();
	const tab = searchParams.get("tab") || "terms";

	const renderContent = () => {
		switch (tab) {
			case "privacy":
				return <Privacy />;
			case "specified":
				return <Specified />;
			default:
				return <Tos />;
		}
	};

	return (
		<>
			<nav className="relative flex items-center whitespace-nowrap mt-12 gap-6">
				<div className="absolute bottom-0 left-0 right-0 border-b border-gray-200" />
				<Link
					className={`relative inline-flex items-center border-b py-2.5 ${
						tab === "terms" || !tab
							? "border-gray-900"
							: "border-transparent text-gray-600 hover:text-gray-900"
					}`}
					href="/terms"
				>
					利用規約
				</Link>
				<Link
					className={`relative inline-flex items-center border-b py-2.5 ${
						tab === "privacy"
							? "border-gray-900"
							: "border-transparent text-gray-600 hover:text-gray-900"
					}`}
					href="/terms?tab=privacy"
				>
					<span>
						プライバシー
						<span className="hidden sm:inline">ポリシー</span>
					</span>
				</Link>
				<Link
					className={`relative inline-flex items-center border-b py-2.5 ${
						tab === "specified"
							? "border-gray-900"
							: "border-transparent text-gray-600 hover:text-gray-900"
					}`}
					href="/terms?tab=specified"
				>
					特商法表記
				</Link>
			</nav>
			<div className="mt-12 pb-32">{renderContent()}</div>
		</>
	);
}
