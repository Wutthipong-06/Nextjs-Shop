export default function Contact() {
    return (
    <div className="min-h-screen bg-neutral-950 from-background to-muted pt-20">
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="thai-text text-muted-foreground text-5xl md:text-7xl font-bold tracking-tight mb-6 p-2">
            ติดต่อเรา
          </h1>
          <p className="thai-text text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            หากคุณมีคำถาม ข้อเสนอแนะ หรือต้องการความช่วยเหลือ โปรดอย่าลังเลที่จะติดต่อทีมสนับสนุนของเรา เรายินดีที่จะช่วยเหลือคุณ!
          </p>
          <div className="thai-text text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto">
            <p><strong>อีเมล:</strong> support@shopv1.com</p>
            <p><strong>โทรศัพท์:</strong> +66 1234 5678</p>
            <p><strong>ที่อยู่:</strong> 123 ถนนสุขุมวิท, กรุงเทพฯ, ประเทศไทย</p>
          </div>
        </div>
      </section>
    </div>
    );
}