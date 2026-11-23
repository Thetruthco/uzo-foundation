import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Uzochukwu Akunedozi Foundation | Building Hope, Changing Lives",
 description: "A Nigeria-based foundation advancing children's wellbeing, education, health, empowerment and community development.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
