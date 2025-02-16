import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import TermsContent from "./TermsContent";

export default function Terms() {
	return (
		<div>
			<div className="flex min-h-screen flex-col">
				<Header />
				<div className="min-h-screen">
					<div className="mx-auto w-full px-6 sm:px-10 max-w-screen-md">
						<Suspense>
							<TermsContent />
						</Suspense>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
