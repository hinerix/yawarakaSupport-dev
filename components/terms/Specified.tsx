import Link from "next/link";

export default function Specified() {
	return (
		<div className="mt-12 pb-20">
			<div>
				<h1 className="text-lg">特定商取引法に基づく表記</h1>
				<div>
					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							事業者名、事業者の所在、電話番号
						</h2>
						<div className="mt-4 text-sm">
							<p>
								※
								特定商取引法に基づき、請求があった場合に遅滞なく開示いたします。
							</p>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							お問合せ先
						</h2>
						<div className="mt-4 text-sm space-y-4">
							<p>
								<a
									href="https://forms.gle/kqDmMQxbXq7x1VTd9"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-700 hover:text-gray-400 duration-500 underline underline-offset-4 decoration-dotted"
								>
									お問い合わせフォーム
								</a>
							</p>
							<p className="text-xs text-gray-600">
								*
								お電話でのお問い合わせは受け付けておりません。上記のお問い合わせフォームをご利用ください。
							</p>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">販売価格</h2>
						<div className="mt-4 text-sm space-y-4">
							<p>
								<Link
									href="/about"
									className="text-gray-700 hover:text-gray-400 duration-500 underline underline-offset-4 decoration-dotted"
								>
									こちらのページ
								</Link>
								をご参照ください。
							</p>
							<p>
								ご依頼の内容により、価格が変動する場合がございます。その場合はお見積りを提示いたします。
							</p>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							販売価格以外でお客様に発生する金銭
						</h2>
						<div className="mt-4 text-sm">
							<ul className="list-disc space-y-4 pl-6">
								<li>消費税</li>
								<li>振込手数料</li>
							</ul>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">提供時期</h2>
						<div className="mt-4 text-sm space-y-8">
							<div>
								<h3 className="text-base">パソコンやスマホのお悩み相談</h3>
								<p className="mt-2">
									ご希望の日時を調整し、対応いたします。詳細はお申込み時にご提示いたします。
								</p>
							</div>

							<div>
								<h3 className="text-base">Webサイト/LP制作</h3>
								<p className="mt-2">
									制作期間は、Webサイトの規模や内容により異なりますが、通常1ヶ月～3ヶ月程度です。詳細はお見積もり時にご提示いたします。
								</p>
							</div>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							お支払い方法
						</h2>
						<div className="mt-4 text-sm">
							<ul className="list-disc space-y-4 pl-6">
								<li>銀行振込</li>
							</ul>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							お支払時期
						</h2>
						<div className="mt-4 text-sm space-y-8">
							<div>
								<h3 className="text-base">パソコンやスマホのお悩み相談</h3>
								<p className="mt-2">
									原則として、サポート完了後14日以内に支払うものとします。
								</p>
							</div>

							<div>
								<h3 className="text-base">Webサイト/LP制作</h3>
								<p className="mt-2">
									原則として、お見積り価格を*着手金と*残金に分けて支払うものとします。
								</p>
								<ol className="list-decimal mt-4 space-y-2 pl-5">
									<li>着手金：ご契約成立後14日以内</li>
									<li>残金：納品後14日以内</li>
								</ol>
								<div className="mt-4 space-y-2">
									<p className="text-xs text-gray-600">
										* 着手金：お見積り価格の30%の料金
									</p>
									<p className="text-xs text-gray-600">
										* 残金　：(お見積り価格-着手金) + 制作中に別途発生した費用
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							返金について
						</h2>
						<div className="mt-4 text-sm">
							<p>
								商品の性質上、お客様のご都合によるキャンセルと返金はできかねます。
							</p>
						</div>
					</section>

					<section className="mt-12">
						<h2 className="border-b border-gray-200 pb-2 text-lg">
							個人情報の取扱いについて
						</h2>
						<div className="mt-4 text-sm space-y-4">
							<p>
								<Link
									href="/terms?tab=privacy"
									className="text-gray-700 hover:text-gray-400 duration-500 underline underline-offset-4 decoration-dotted"
								>
									プライバシーポリシー
								</Link>
								をご確認ください。
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
