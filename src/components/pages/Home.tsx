"use client";

import { ArrowRight, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 from-background to-muted pt-20">

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <Badge variant="outline" className="thai-text mb-4 text-sm text-neutral-500 hover:text-neutral-300 duration-300 ease-in-out">
            Coming Soon...
          </Badge>
          <h1 className="thai-text text-muted-foreground text-5xl md:text-7xl font-bold tracking-tight mb-6 p-2">
            นี่แหละ
            <AuroraText className="text-5xl md:text-7xl font-bold tracking-tight mb-6 p-2">ShopV1</AuroraText>
          </h1>
          <p className="thai-text text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ยินดีต้อนรับสู่ ShopV1 เว็บไซต์อีคอมเมิร์ซที่ทันสมัยและใช้งานง่าย 
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
            <h2 className="thai-text text-4xl font-bold mb-4">ทำไมต้องเลือก ShopV1?</h2>
            <p className="thai-text text-xl text-muted-foreground max-w-2xl mx-auto">
            สัมผัสประสบการณ์อนาคตของการช้อปปิ้งออนไลน์ด้วยคุณสมบัติอันล้ำสมัยและการออกแบบที่ไร้รอยต่อของเรา
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Performance</CardTitle>
                <CardDescription className="thai-text">
                    ประสบการณ์การโหลดหน้าที่รวดเร็วและการตอบสนองที่คล่องตัวด้วยเทคโนโลยีเว็บที่ทันสมัย
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="thai-text text-sm text-muted-foreground">
                    การออกแบบที่หลากหลายและการปรับแต่งที่ครอบคลุมทำให้การใช้งานง่ายขึ้นและรวดเร็วขึ้น
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription className="thai-text">
                    ข้อมูลและการทำธุรกรรมของคุณปลอดภัยด้วยความปลอดภัยที่ดีที่สุด
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="thai-text text-sm text-muted-foreground">
                    ช้อปปิ้งออนไลน์ด้วยความมั่นใจว่าข้อมูลและการทำธุรกรรมของคุณปลอดภัย
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>User-Focused</CardTitle>
                <CardDescription className="thai-text">
                    การออกแบบที่มีความเป็นมิตรกับผู้ใช้งานและการปรับแต่งที่ครอบคลุม
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="thai-text text-sm text-muted-foreground">
                    ไม่ต้องกังวลเกี่ยวกับข้อมูลและการทำธุรกรรมของคุณปลอดภัย
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="thai-text text-4xl font-bold mb-4">พร้อมมาเป็นส่วนหนึ่งกับเราแล้วหรือยัง?</h2>
          <p className="thai-text text-xl mb-8 opacity-90">
            เริ่มต้นการช้อปปิ้งออนไลน์ด้วยความมั่นใจว่าข้อมูลและการทำธุรกรรมของคุณปลอดภัย
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
