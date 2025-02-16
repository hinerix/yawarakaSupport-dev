import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function About() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<div className="min-h-screen">
				<section className="mt-16 pb-20">
					<div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-md">
						<header className="flex flex-col items-center">
							<h1 className="text-xl">このサービスについて</h1>
							<Image
								src="/yawarakaSupport/images/about/about.png"
								alt="About"
								width={200}
								height={200}
							/>
						</header>
						<div className="mt-6 text-base leading-loose">
							<p>ある日、母にパソコンの選び方を教えたことがきっかけでした。</p>
							<p className="mt-4">
								「世の中には、母のように困っている人がたくさん居るかもしれない。」
							</p>
							<p className="mt-4">そんな思いから、このサービスを作りました。</p>
							<p className="mt-4">
								私は過去に勤めていた会社で、IT機器のトラブルサポートを約7年経験してきました。
							</p>
							<p className="mt-4">
								この経験を活かし、皆さまのお困りごとを全力でサポートいたします。
							</p>

							<h2 className="mt-16 pb-2 text-lg sm:text-xl border-b border-gray-200">
								パソコンやスマホのお悩み相談
							</h2>
							<p className="mt-6">
								<Image
									src="/yawarakaSupport/images/about/consulting.png"
									alt="お悩み相談_画像"
									width={200}
									height={200}
								/>
							</p>
							<p className="mt-4">以下のようなご相談をお受けしております。</p>
							<ul className="flex list-disc flex-col gap-3 pl-5 leading-default mt-4">
								<li>
									これからパソコン/スマホを買う予定だけど何をどう選べばいいか分からない
								</li>
								<li>パソコンを買ったは良いものの、使い方が分からない</li>
								<li>
									お子さん、お孫さんが使ってるアプリってどうやって使うの？
								</li>
								<li>周りに相談できる人が居ない</li>
								<li>〇〇について調べているけど、何がなんだか分からない</li>
							</ul>
							<div className="mt-8 border border-gray-200 rounded-3xl p-7 sm:p-8">
								<h3 className="">ご利用の流れ</h3>
								<ol className="flex list-decimal flex-col gap-3 pl-5 leading-default mt-4 text-sm">
									<li>
										<a
											href="https://forms.gle/kqDmMQxbXq7x1VTd9"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
										>
											お問い合わせフォーム
										</a>
										からご相談
									</li>
									<li>状況のすり合わせ・ヒアリング</li>
									<li>*サポート方法、料金体系の説明</li>
									<li>事前見積もりの提示</li>
									<li>サポート内容の確認と合意</li>
									<li>サポート完了の報告と状況確認</li>
									<li>料金のお支払い</li>
									<li>サポート後のフォロー</li>
								</ol>
								<p className="text-xs text-gray-600 mt-4">
									*
									サポート方法はビデオ通話、チャット、メールのうち、ご希望の方法で対応します。
								</p>
							</div>

							<h2 className="mt-16 pb-2 text-lg sm:text-xl border-b border-gray-200">
								Webサイト/LP制作
							</h2>
							<p className="mt-6">
								<Image
									src="/yawarakaSupport/images/about/website.png"
									alt="Webサイト/LP制作_画像"
									width={200}
									height={200}
								/>
							</p>
							<p className="mt-4">
								お店や商品の魅力がそのまま伝わる、シンプルなデザインが得意です。構成やデザインをどうして良いか分からない方にも、考え方や知識を共有、打ち合わせをした上で制作します。
							</p>
							<p className="mt-4">制作事例をご紹介します。</p>
							<div className="mt-4">
								<div className="rounded-3xl border space-x-12 border-gray-200 p-7 sm:flex sm:p-8">
									<Image
										src="/yawarakaSupport/images/caseStudies/Byeバイト.png"
										alt="Byeバイト/LP制作_画像"
										width={250}
										height={250}
										className="rounded-3xl shadow"
									/>
									<div className="flex flex-1 flex-col items-start leading-relaxed">
										<p className="text-sm text-gray-600">
											退職代行サービス Byeバイト様
										</p>
										<p className="mt-2">LP制作</p>
										<p className="mt-4">
											<Link
												href="/case-study/byework"
												className="text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
											>
												インタビューを見る →
											</Link>
										</p>
									</div>
								</div>
							</div>

							<div className="mt-8 border border-gray-200 rounded-3xl p-7 sm:p-8">
								<h3 className="">ご利用の流れ</h3>
								<ol className="flex list-decimal flex-col gap-3 pl-5 leading-default mt-4 text-sm">
									<li>
										<a
											href="https://forms.gle/kqDmMQxbXq7x1VTd9"
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-400 hover:text-blue-300 duration-500 underline underline-offset-4 decoration-dotted"
										>
											お問い合わせフォーム
										</a>
										からご相談
									</li>
									<li>ヒアリング・お見積り</li>
									<li>要件定義・企画・設計・構成</li>
									<li>契約 & 着手金のお支払い</li>
									<li>制作・開発・テスト</li>
									<li>制作物の納品・公開</li>
									<li>残金のお支払い</li>
									<li>*保守・運用</li>
								</ol>
								<p className="text-xs text-gray-600 mt-4">
									*
									制作物の規模によっては、別途保守・運用契約の締結をお願いする場合がございます。
								</p>
							</div>

							<h2 className="mt-16 pb-2 text-lg sm:text-xl border-b border-gray-200">
								ご利用料金について
							</h2>
							<p className="mt-6">
								<Image
									src="/yawarakaSupport/images/about/price.png"
									alt="ご利用料金_画像"
									width={200}
									height={200}
									className=""
								/>
							</p>
							<p className="mt-4">サービスごとの料金プランです。</p>

							<div className="mt-4 sm:flex sm:gap-8">
								{/* パソコンやスマホのお悩み相談カード */}
								<div className="flex-1 rounded-3xl border border-gray-200 p-7 sm:w-1/2 sm:p-8">
									<div className="leading-relaxed">
										<p className="">パソコンやスマホのお悩み相談</p>
										<p className="mt-4 pl-1">
											<span className="text-lg">3,000円</span>
											<span className="text-gray-600"> + 税</span>
										</p>
										<ul className="flex flex-col gap-1 mt-4 list-disc pl-5 text-sm">
											<li>購入相談</li>
											<li>使い方のレクチャー</li>
											<li>調べもの</li>
											<li>アプリやソフトの活用方法</li>
										</ul>
										<p className="mt-2 text-sm text-gray-600">
											※その他ご相談はお見積りいたします。
										</p>
									</div>
								</div>
								{/* Webサイト/LP制作カード */}
								<div className="mt-4 flex-1 rounded-3xl border border-gray-200 p-7 sm:mt-0 sm:w-1/2 sm:p-8">
									<div className="leading-relaxed">
										<p className="">Webサイト/LP制作</p>
										<p className="mt-4 pl-1">
											<span className="text-lg">50,000円 ～</span>
											<span className="text-gray-600"> + 税</span>
										</p>
										<ul className="flex flex-col gap-1 mt-4 list-disc pl-5 text-sm">
											<li>要件定義</li>
											<li>UI設計</li>
											<li>コーディング</li>
											<li>公開</li>
										</ul>
										<div className="mt-2 text-sm text-gray-600 space-y-0.5">
											<p>※上記金額はあくまで目安です。</p>
											<p>
												Webサイトの構成やご要望によってお見積りが変動いたします。
											</p>
											<p>まずはお気軽にご相談ください。</p>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-4 rounded-3xl">
								<h3>お支払い方法</h3>
								<ol className="flex list-disc flex-col gap-3 pl-5 leading-default mt-4 text-sm">
									<li>*銀行振込</li>
									<li className="text-gray-400">
										クレジットカード決済（準備中）
									</li>
								</ol>
								<p className="text-xs text-gray-600 mt-4">
									* お支払いのタイミングでお振込先口座情報をお伝えします。
								</p>
							</div>

							<ContactCard />
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</div>
	);
}
