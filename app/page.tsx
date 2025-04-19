'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Asterisk, BadgeRussianRuble, CheckCircle, Code, Info, MessageSquare, Smartphone, Users } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

const FUNCTIONALITY_OPTIONS = [
  {
    id: 1,
    isChecked: false,
    text: "Каталог товаров/услуг"
  },
  {
    id: 2,
    isChecked: false,
    text: "Корзина и онлайн-оплата"
  },
  {
    id: 3,
    isChecked: false,
    text: "Бронирование/запись"
  },
  {
    id: 4,
    isChecked: false,
    text: "Геймификация (квизы, викторины, конкурсы, тапалки и т.п.)"
  },
  {
    id: 5,
    isChecked: false,
    text: "Личный кабинет пользователя"
  },
  {
    id: 6,
    isChecked: false,
    text: "Интеграция с CRM / API / 1C или другими сервисами"
  },
  {
    id: 7,
    isChecked: false,
    text: "Другое:"
  },
]

export default function LandingPage() {

  const [showBriefModal, setShowBriefModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1);

  const [name, setName] = useState<string>("")
  const [niche, setNiche] = useState<string>("")
  const [purpose, setPurpose] = useState<string>("")
  const [audience, setAudience] = useState<string>("")
  const [interaction, setInteraction] = useState<string>("")
  const [cost, setCost] = useState<string>("")
  const [deadline, setDeadline] = useState<string>("")
  const [examples, setExamples] = useState<string>("")
  const [contactPerson, setContactPerson] = useState<string>("")
  const [contacts, setContacts] = useState<string>("")
  const [addition, setAddition] = useState<string>("")

  const [functionalityOptions, setFunctionalityOptions] = useState<{id: number; isChecked: boolean; text: string}[]>(FUNCTIONALITY_OPTIONS)
  const [otherFunctionality, setOtherFunctionality] = useState<string>("")
  
  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const sendBrief = async () => {
    if (!name || !niche || !purpose || !contactPerson || !contacts) {
      toast.error("Заполните все обязательные поля")
      return
    }
    
    let updatedOptions = [...functionalityOptions];
    if (functionalityOptions[6].isChecked && otherFunctionality) {
      updatedOptions = functionalityOptions.map(item => 
        item.id === 7 
          ? { ...item, text: otherFunctionality } 
          : item
      );
      setFunctionalityOptions(updatedOptions);
    }
    const functionality = updatedOptions
      .filter(item => item.isChecked)
      .map(item => item.text)
      .join(", ");
    console.log(functionality);
    
    const response = await fetch("/api/briefs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name,
        niche,
        purpose,
        audience,
        interaction,
        functionality,
        cost,
        deadline,
        examples,
        contactPerson,
        contacts,
        addition
      })
    })

    const data = await response.json()
    if (data.success) {
      toast.info("Данные успешно отправлены")
      setName("")
      setNiche("")
      setPurpose("")
      setAudience("")
      setInteraction("")
      setFunctionalityOptions(FUNCTIONALITY_OPTIONS)
      setCost("")
      setDeadline("")
      setExamples("")
      setContactPerson("")
      setContacts("")
      setAddition("")
      setShowBriefModal(false)
    }
  }
  
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
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Что это?
              </Link>
              <Link
                href="#options"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Какие бывают?
              </Link>
              <Link
                href="#process"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Процесс
              </Link>
              {/* <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link> */}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button asChild>
                <Link href="#contact">Оставить заявку</Link>
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
                      Заполнить бриф
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/* <Button variant="outline" size="lg" asChild>
                    <Link href="#portfolio">View Our Work</Link>
                  </Button> */}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 lg:w-[450px] lg:h-[450px]">
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

        <section id="options" className="w-full py-12 md:py-24 lg:py-32 bg-custom-gradient flex justify-center items-center">
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

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Примеры</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Шаблоны того, что можно сделать. Нажмите на любой, чтобы открыть в Телеграме
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "MERCH",
                  image: "/showcase-1.png",
                  description: "Мини-ап интернет-магазина",
                  url: "https://t.me/mm_showcase_1_bot"
                },
                {
                  name: "GLAMOUR",
                  image: "/showcase-2.png",
                  description: "Мини-ап с системой записи на услуги",
                  url: "https://t.me/mm_showcase_2_bot"
                },
                {
                  name: "LOYALTY",
                  image: "/showcase-3.png",
                  description: "Мини-ап с системой программы лояльности, проведения акций и розыгрышей",
                  url: "https://t.me/mm_showcase_3_bot"
                }
              ].map((item) => (
                <div key={item.name} className="group relative overflow-hidden rounded-lg border">
                  <a href={item.url}>
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={600}
                        height={600}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </a>
                  <div className="p-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="w-full py-12 md:py-24 lg:py-32  flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Почему мы</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  С нами все просто: системный подход, профессиональная разработка, долгосрочное сотрудничество - все, чтобы Вы кайфанули от процесса и наслаждались результатом
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {[
                {
                  step: 1,
                  title: "Исследование и аналитика",
                  description: "Тщательно проанализируем Ваш кейс и построим модель мини-апа с учетом особенностей Вашего бизнеса.",
                },
                {
                  step: 2,
                  title: "Дизайн и прототипирование",
                  description: "Создадим несколько интерактивных прототипов, чтобы Вы могли выбрать тот самый.",
                },
                {
                  step: 3,
                  title: "Разработка",
                  description: "Используем самые современные технологии, чтобы собрать Ваше мини-приложение.",
                },
                {
                  step: 4,
                  title: "Тестирование и контроль качества",
                  description: "Проведем краш-тест приложения, чтобы оно работало безупречно.",
                },
                {
                  step: 5,
                  title: "Развертывание и поддержка",
                  description: "Запустим ваше мини-приложение и обеспечим постоянную поддержку и обновления.",
                },
                {
                  step: 6,
                  title: "А еще...",
                  description: "Появятся новые идеи и бизнес-цели? Отлично! Мы всегда с Вами, чтобы воплотить их в жизнь.",
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

        

        <section id="contact" className="w-full py-12 md:py-24 bg-muted lg:py-32 px-10 flex justify-center items-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Готовы создать свой Telegram Mini App?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Заполните бриф или свяжитесь с нами любым удобным способом
              </p>
              <Button onClick={() => setShowBriefModal(true)} size="lg" className="mr-4">Открыть бриф</Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://t.me/maggalon">
                  Написать в Telegram
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64">
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
      <Modal isOpen={showBriefModal} onClose={() => setShowBriefModal(false)}>
          <div className="w-full flex flex-col gap-5">
            <div className="w-full justify-center flex gap-2">
              {[1,2,3,4,5].map(n => {
                return (
                  <div key={n} onClick={() => setCurrentStep(n)} className={`cursor-pointer h-4 w-4 rounded-full border-2 border-primary ${currentStep === n && "bg-primary"}`}></div>
                )
              })}
            </div>
            {currentStep === 1 &&
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <Label htmlFor="name" className="text-lg">Название компании / проекта</Label>
                    <Asterisk className="h-4 w-4 text-red-400" />
                  </div>
                  <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <Label htmlFor="niche" className="text-lg">Сфера бизнеса (ниша)</Label>
                    <Asterisk className="h-4 w-4 text-red-400" />
                  </div>
                  <p className="max-w-[600px] text-muted-foreground text-sm">Например, e-commerce, услуги, образование, развлечения и т. д.</p>
                  <Input id="niche" type="text" value={niche} onChange={e => setNiche(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <Label htmlFor="purpose" className="text-lg">Цель Mini App</Label>
                    <Asterisk className="h-4 w-4 text-red-400" />
                  </div>
                  <p className="max-w-[600px] text-muted-foreground text-sm">Например, увеличение продаж, вовлечение аудитории, автоматизация процессов и т. д.</p>
                  <Input id="purpose" type="text" value={purpose} onChange={e => setPurpose(e.target.value)} />
                </div>
                <div className="flex w-full justify-end">
                  <Button onClick={handleNext}>Далее</Button>
                </div>
              </>
            }
            {currentStep === 2 &&
              <>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="audience" className="text-lg">Кто ваши клиенты?</Label>
                  <p className="max-w-[600px] text-muted-foreground text-sm">Опишите вашу аудиторию (возраст, интересы, поведение в Telegram)</p>
                  <Input id="audience" type="text" value={audience} onChange={e => setAudience(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="interaction" className="text-lg">Как они сейчас взаимодействуют с вашим бизнесом?</Label>
                  <p className="max-w-[600px] text-muted-foreground text-sm">Например, через бота, сайт, соцсети</p>
                  <Input id="interaction" type="text" value={interaction} onChange={e => setInteraction(e.target.value)} />
                </div>
                <div className="flex w-full justify-between">
                  <Button variant="outline" onClick={handlePrev}>Назад</Button>
                  <Button onClick={handleNext}>Далее</Button>
                </div>
              </>
            }
            {currentStep === 3 &&
              <>
                <div className="flex flex-col gap-1">
                  <Label className="text-lg">Желаемый функционал (можно выбрать несколько)</Label>
                  {functionalityOptions.map(item => {
                    return (
                      <div key={item.id} className="flex items-center gap-2">
                        <Checkbox onClick={() => {setFunctionalityOptions(functionalityOptions.map(i => i.id === item.id ? {id: i.id, isChecked: !i.isChecked, text: i.text} : i))}} checked={item.isChecked} />
                        <span className="text-muted-foreground">{item.text}</span>
                        {item.id === 7 && <input disabled={!item.isChecked} type="text" value={otherFunctionality} onChange={e => setOtherFunctionality(e.target.value)} className=" border-b-2 focus:border-primary focus:outline-none text-sm text-muted-foreground" />}
                      </div>
                    )
                  })

                  }
                </div>
                <div className="flex w-full justify-between">
                  <Button variant="outline" onClick={handlePrev}>Назад</Button>
                  <Button onClick={handleNext}>Далее</Button>
                </div>
              </>
            }
            {currentStep === 4 &&
              <>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="cost" className="text-lg">Ожидаемый бюджет</Label>
                  <Input id="cost" type="text" value={cost} onChange={e => setCost(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="deadline" className="text-lg">Желаемые сроки запуска</Label>
                  <Input id="deadline" type="text" value={deadline} onChange={e => setDeadline(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="reference" className="text-lg">Примеры Mini Apps или сервисов, которые вам нравятся</Label>
                  <Input id="reference" type="text" value={examples} onChange={e => setExamples(e.target.value)} />
                </div>
                <div className="flex w-full justify-between">
                  <Button variant="outline" onClick={handlePrev}>Назад</Button>
                  <Button onClick={handleNext}>Далее</Button>
                </div>
              </>
            }
            {currentStep === 5 &&
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <Label htmlFor="contact_person" className="text-lg">Контактное лицо (имя, должность)</Label>
                    <Asterisk className="h-4 w-4 text-red-400" />
                  </div>
                  <Input id="contact_person" type="text" value={contactPerson} onChange={e => setContactPerson(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <Label htmlFor="contact_info" className="text-lg">Контакты для связи</Label>
                    <Asterisk className="h-4 w-4 text-red-400" />
                  </div>
                  <p className="max-w-[600px] text-muted-foreground text-sm">Telegram / Email / Телефон</p>
                  <Input id="contact_info" type="text" value={contacts} onChange={e => setContacts(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="addition" className="text-lg">Дополнительно</Label>
                  <p className="max-w-[600px] text-muted-foreground text-sm">Любая информация, которой вы считаете нужным с нами поделиться</p>
                  <Textarea id="addition" value={addition} onChange={e => setAddition(e.target.value)} />
                </div>
                <div className="flex w-full justify-between">
                  <Button variant="outline" onClick={handlePrev}>Назад</Button>
                  <Button onClick={sendBrief}>Отправить</Button>
                </div>
              </>
            }
          </div>
      </Modal>
      <ToastContainer className="" />
    </div>
  )
}

