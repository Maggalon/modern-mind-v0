import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BadgeRussianRuble, CheckCircle, Code, Info, MessageSquare, Smartphone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col ">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image alt="logo" width={32} height={24} src="/mm-logo.png" />
              <span className="inline-block font-bold">Modern mind</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#services"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Portfolio
              </Link>
              <Link
                href="#process"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Process
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 px-10 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Разработаем <span className="text-primary">Mini App</span> для Вашего бизнеса
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Заполняйте короткий бриф, и мы пришлем Вам индивидуальную подборку концепций мини апов.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">
                      Оставить заявку
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/* <Button variant="outline" size="lg" asChild>
                    <Link href="#portfolio">View Our Work</Link>
                  </Button> */}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[450px]">
                  <Image
                    src="/designer.svg"
                    alt="Telegram Mini App Demo"
                    fill
                    className=""
                    priority
                  />
                  {/* <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10"></div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Почему Вам нужен мини ап в Телеграме?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Мини-приложения предлагают уникальные преимущества компаниям, стремящимся взаимодействовать со своей аудиторией.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  title: "Прямой контакт с аудиторией",
                  description: "Обращайтесь к своим клиентам напрямую в их любимом месенджере.",
                },
                {
                  title: "Никаких проверок",
                  description: "Пропустите длительный процесс одобрения в App Store и Google Play и запускайтесь быстрее.",
                },
                {
                  title: "Легкий доступ",
                  description: "Не надо ничего скачивать. Просто открываете Telegram-бота и запускаете.",
                },
                {
                  title: "Экономия бюджета",
                  description: "В среднем, разработка Telegram Mini App обходится на 40% дешевле чем разработка мобильного приложения.",
                },
                {
                  title: "Кроссплатформенность",
                  description: "Заработает на всех устройствах и платформах, поддерживающих Telegram.",
                },
                {
                  title: "Экосистема",
                  description: "Мини-апы органично встраиваются в Telegram. Ими можно делиться в чатах и группах, оплачивать услуги звездами и пользоваться другими классными фишками Телеграма.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div>
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-custom-gradient flex justify-center items-center">
          <div className="container px-4 md:px-6 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Какие мини апы бывают</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Фактически функционал мини-приложений ничем не ограничен, однако сейчас наиболее распространены 3 вида мини-апов.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Info className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">Инфо-продукты и промо-компании</h3>
                <p className="text-center text-muted-foreground">
                  Мини-апы с простейшей геймификацией и реферальной системой. Подходят для запуска нового проекта и вовлечения пользователей.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BadgeRussianRuble className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Еком</h3>
                <p className="text-center text-muted-foreground">
                  Встроенная геолокация, удобный каталог товаров и корзина, интеграция с платежной системой и привычные уведомления - все, что нужно для создания максимальных конверсий.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center">Многофункциональные сервисы</h3>
                <p className="text-center text-muted-foreground">
                  Финансовые приложения, Web3.0-стартапы и другие проекты с комплексным функционалом и глубоким вовлечением пользователей.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button className="w-full max-w-5xl" asChild size="lg">
                <Link href="#contact">
                  Получить консультацию
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our successful Telegram Mini App projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=600&width=600&text=Project+${item}`}
                      alt={`Project ${item}`}
                      width={600}
                      height={600}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">Project {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item % 2 === 0 ? "E-commerce" : "Service Booking"} Mini App
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We follow a structured approach to deliver high-quality Telegram Mini Apps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {[
                {
                  step: 1,
                  title: "Discovery & Planning",
                  description: "We understand your business goals and plan the mini app accordingly.",
                },
                {
                  step: 2,
                  title: "Design & Prototyping",
                  description: "We create intuitive designs and interactive prototypes for your approval.",
                },
                {
                  step: 3,
                  title: "Development",
                  description: "Our developers build your mini app using the latest technologies.",
                },
                {
                  step: 4,
                  title: "Testing & QA",
                  description: "Rigorous testing ensures your mini app works flawlessly.",
                },
                {
                  step: 5,
                  title: "Deployment & Support",
                  description: "We launch your mini app and provide ongoing support and updates.",
                },
              ].map((process) => (
                <div key={process.step} className="flex gap-4 rounded-lg border p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {process.step}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-bold">{process.title}</h3>
                    <p className="text-sm text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our work.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {[
                {
                  name: "Alex Johnson",
                  company: "TechStart Inc.",
                  testimonial:
                    "The mini app developed by the team has increased our customer engagement by 40%. Highly recommended!",
                },
                {
                  name: "Sarah Williams",
                  company: "Retail Solutions",
                  testimonial:
                    "Working with this agency was a breeze. They delivered our e-commerce mini app ahead of schedule and exceeded our expectations.",
                },
                {
                  name: "Michael Brown",
                  company: "Service Connect",
                  testimonial:
                    "Our booking mini app has streamlined our operations and improved customer satisfaction. Great job!",
                },
                {
                  name: "Emily Davis",
                  company: "Media Group",
                  testimonial:
                    "The team's expertise in Telegram Mini Apps is unmatched. They understood our requirements perfectly and delivered an outstanding product.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col justify-between rounded-lg border p-6">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                  </div>
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 px-10 flex justify-center items-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Готовы создать свой Telegram Mini App?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Заполните бриф или свяжитесь с нами любым удобным способом
              </p>
              <Button size="lg" className="mr-4">Открыть бриф</Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://t.me/maggalon">
                  Написать в Telegram
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px]">
                <Image
                  src="/contact-filler.svg"
                  alt="Telegram Mini App Demo"
                  fill
                  className=""
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 px-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image alt="logo" width={32} height={24} src="/mm-logo.png" />
            <p className="text-sm font-medium">Modern mind © {new Date().getFullYear()}</p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="tel:+79245818300" className="hover:underline">
              Тел.: +7 (924) 581-83-00
            </Link>
            <Link href="mailto:abstergo22h@gmail.com" className="hover:underline">
              Email: abstergo22h@gmail.com
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

