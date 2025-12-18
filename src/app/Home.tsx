
import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardInfo } from "./layout/CardInfo";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import colors_change from "@/data/mock";

export default function Home() {
  return (
    <div className={`min-h-screen ${colors_change.primary} from-background to-muted pt-20`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <Badge variant="outline" className="thai-text mb-4 text-sm text-neutral-500 hover:scale-105 hover:text-neutral-300 duration-300 transition-all">
            Coming Soon...
          </Badge>
          <h1 className="thai-text text-muted-foreground text-5xl md:text-7xl font-bold tracking-tight mb-6 p-2">
            นี่หรือเปล่า
            <AuroraText className="text-5xl md:text-7xl font-bold tracking-tight p-2">VAziara e-commerce</AuroraText>
          </h1>
          <p className="thai-text text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ยินดีต้อนรับสู่ VAziara เราสร้างเว็บไซต์อีคอมเมิร์ซที่ทันสมัยและใช้งานง่าย 
          </p>
          <p className="thai-text text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            สัมผัสประสบการณ์อนาคตของการช้อปปิ้งออนไลน์ด้วยคุณสมบัติอันล้ำสมัยและการออกแบบที่ไร้รอยต่อของเรา
          </p>  
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="thai-text text-4xl font-bold mb-4">ทำไมต้องเลือก VAziara?</h2>
            <p className="thai-text text-xl text-muted-foreground max-w-2xl mx-auto">
            สัมผัสประสบการณ์อนาคตของการช้อปปิ้งออนไลน์ด้วยคุณสมบัติอันล้ำสมัยและการออกแบบที่ไร้รอยต่อของเรา
            </p>
          </div>
          <CardInfo/>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="thai-text text-4xl font-bold mb-4">พร้อมมาเป็นส่วนหนึ่งกับเราแล้วหรือยัง?</h2>
          <p className="thai-text text-xl mb-8 opacity-90">
            เริ่มต้นการช้อปปิ้งออนไลน์ด้วยความมั่นใจว่าข้อมูลและการทำธุรกรรมของคุณปลอดภัยกับเรา
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 ease-in-out">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
