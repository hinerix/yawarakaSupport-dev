import Link from "next/link";

export default function Footer() {
	return (
		<div>
			<footer className="py-14">
				<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-lg flex flex-col gap-11 md:flex-row">
					<div className="flex-1">
						<Link href="/" className="ml-0.5">
							やわらかITサポート
						</Link>
						<p className="text-gray-600 text-xs mt-1">
							パソコンやスマホの「ちょっと困った」を
							<br />
							気軽に相談できるサービス
						</p>
					</div>

					<div className="flex gap-6 md:gap-24">
						<div className="mt-1 whitespace-nowrap flex flex-col gap-4 text-sm flex-1">
							<Link
								href="/"
								className="text-gray-600 hover:text-blue-400 duration-500"
							>
								ホーム
							</Link>
							<Link
								href="/about"
								className="text-gray-600 hover:text-blue-400 duration-500"
							>
								使い方
							</Link>
						</div>
						<div className="mt-1 whitespace-nowrap flex flex-col gap-4 text-sm flex-1">
							<Link
								href="/terms"
								className="text-gray-600 hover:text-blue-400 duration-500"
							>
								規約とポリシー
							</Link>
							<a
								href="https://forms.gle/kqDmMQxbXq7x1VTd9"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-600 hover:text-blue-400 duration-500"
							>
								お問い合わせ
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
