"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  BookOpen,
  Award,
  Users,
  Search,
  Play,
  Download,
  CreditCard,
  BarChart3,
  Settings,
  LogIn,
  UserPlus,
  Home,
  GraduationCap,
  FileCode,
  ShoppingCart,
} from "lucide-react"

export default function RobleAmarilloShowcase() {
  const [activeSection, setActiveSection] = useState("home")
  const [codeInput, setCodeInput] = useState('console.log("Hola Mundo");')
  const [codeOutput, setCodeOutput] = useState("")

  const runCode = () => {
    setCodeOutput("Hola Mundo\n✓ Código ejecutado exitosamente")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary border-b-4 border-primary-dark shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-gray-800" />
              <span className="text-2xl font-bold text-gray-800">Roble Amarillo</span>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                variant={activeSection === "home" ? "secondary" : "ghost"}
                onClick={() => setActiveSection("home")}
                className="text-gray-800"
              >
                <Home className="h-4 w-4 mr-2" />
                Inicio
              </Button>
              <Button
                variant={activeSection === "auth" ? "secondary" : "ghost"}
                onClick={() => setActiveSection("auth")}
                className="text-gray-800"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Autenticación
              </Button>
              <Button
                variant={activeSection === "courses" ? "secondary" : "ghost"}
                onClick={() => setActiveSection("courses")}
                className="text-gray-800"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Cursos
              </Button>
              <Button
                variant={activeSection === "dashboard" ? "secondary" : "ghost"}
                onClick={() => setActiveSection("dashboard")}
                className="text-gray-800"
              >
                <Users className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={activeSection === "admin" ? "secondary" : "ghost"}
                onClick={() => setActiveSection("admin")}
                className="text-gray-800"
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* HOME SECTION */}
        {activeSection === "home" && (
          <div className="space-y-12">
            {/* Hero */}
            <section className="text-center py-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl shadow-2xl">
              <div className="max-w-3xl mx-auto px-4">
                <Badge className="bg-white text-gray-800 mb-4 text-lg px-4 py-2">Plataforma Educativa</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">Roble Amarillo</h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Aprende programación de forma interactiva con cursos, ejercicios prácticos y certificados
                  profesionales
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setActiveSection("auth")}
                    className="bg-gray-800 hover:bg-gray-900 text-white"
                  >
                    Comenzar Ahora
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setActiveSection("courses")}
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                  >
                    Ver Cursos
                  </Button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Características Principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-primary hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-gray-800" />
                    </div>
                    <CardTitle className="text-gray-800">Editor de Código</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Practica con nuestro editor interactivo y ejecuta código en tiempo real
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-gray-800" />
                    </div>
                    <CardTitle className="text-gray-800">Cursos Completos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Accede a cursos estructurados desde nivel básico hasta avanzado
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-gray-800" />
                    </div>
                    <CardTitle className="text-gray-800">Certificados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Obtén certificados al completar cursos y valida tus conocimientos
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent-secondary rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-gray-800" />
                    </div>
                    <CardTitle className="text-gray-800">Comunidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Únete a miles de estudiantes y comparte tu progreso
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Preview */}
            <section className="bg-secondary rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Vista Rápida de Componentes</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  onClick={() => setActiveSection("auth")}
                  className="h-24 flex flex-col gap-2 bg-white text-gray-800 hover:bg-primary border-2 border-primary"
                >
                  <LogIn className="h-6 w-6" />
                  <span>Autenticación</span>
                </Button>
                <Button
                  onClick={() => setActiveSection("courses")}
                  className="h-24 flex flex-col gap-2 bg-white text-gray-800 hover:bg-primary border-2 border-primary"
                >
                  <BookOpen className="h-6 w-6" />
                  <span>Cursos</span>
                </Button>
                <Button
                  onClick={() => setActiveSection("dashboard")}
                  className="h-24 flex flex-col gap-2 bg-white text-gray-800 hover:bg-primary border-2 border-primary"
                >
                  <Users className="h-6 w-6" />
                  <span>Dashboard</span>
                </Button>
                <Button
                  onClick={() => setActiveSection("admin")}
                  className="h-24 flex flex-col gap-2 bg-white text-gray-800 hover:bg-primary border-2 border-primary"
                >
                  <Settings className="h-6 w-6" />
                  <span>Admin</span>
                </Button>
              </div>
            </section>
          </div>
        )}

        {/* AUTHENTICATION SECTION */}
        {activeSection === "auth" && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Sistema de Autenticación</h1>
              <p className="text-gray-600">Componentes de login y registro de usuarios</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary">
                <TabsTrigger value="login" className="data-[state=active]:bg-primary">
                  Iniciar Sesión
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-primary">
                  Registrarse
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Iniciar Sesión</CardTitle>
                    <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" className="border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input id="password" type="password" placeholder="••••••••" className="border-primary" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-gray-800">
                      <LogIn className="mr-2 h-4 w-4" />
                      Iniciar Sesión
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="register">
                <Card className="border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Crear Cuenta</CardTitle>
                    <CardDescription>Regístrate para comenzar a aprender</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input id="name" placeholder="Juan Pérez" className="border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" type="email" placeholder="tu@email.com" className="border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Contraseña</Label>
                      <Input id="reg-password" type="password" placeholder="••••••••" className="border-primary" />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-gray-800">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Crear Cuenta
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* COURSES SECTION */}
        {activeSection === "courses" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Gestión de Cursos</h1>
              <p className="text-gray-600">Lista de cursos, detalles y contenido de lecciones</p>
            </div>

            {/* Search Bar */}
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input placeholder="Buscar cursos..." className="pl-10 border-primary" />
                  </div>
                  <Button className="bg-primary hover:bg-primary-dark text-gray-800">Buscar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Course List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "HTML & CSS Básico",
                  level: "Principiante",
                  lessons: 12,
                  duration: "4 horas",
                  students: 1250,
                },
                {
                  title: "JavaScript Moderno",
                  level: "Intermedio",
                  lessons: 24,
                  duration: "8 horas",
                  students: 890,
                },
                {
                  title: "React Avanzado",
                  level: "Avanzado",
                  lessons: 18,
                  duration: "10 horas",
                  students: 456,
                },
              ].map((course, idx) => (
                <Card key={idx} className="border-2 border-primary hover:shadow-xl transition-all">
                  <div className="h-40 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Code className="h-16 w-16 text-gray-800" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-secondary text-gray-800">{course.level}</Badge>
                      <Badge variant="outline" className="border-primary text-gray-800">
                        {course.lessons} lecciones
                      </Badge>
                    </div>
                    <CardTitle className="text-gray-800">{course.title}</CardTitle>
                    <CardDescription>
                      {course.duration} • {course.students} estudiantes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-gray-800">
                      <Play className="mr-2 h-4 w-4" />
                      Ver Curso
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Course Detail Example */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-2xl text-gray-800">Detalle del Curso: JavaScript Moderno</CardTitle>
                <CardDescription>Aprende JavaScript desde cero hasta nivel avanzado</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-primary rounded-lg">
                    <BookOpen className="h-6 w-6 mx-auto mb-2 text-gray-800" />
                    <div className="font-bold text-gray-800">24 Lecciones</div>
                  </div>
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <Users className="h-6 w-6 mx-auto mb-2 text-gray-800" />
                    <div className="font-bold text-gray-800">890 Estudiantes</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Award className="h-6 w-6 mx-auto mb-2 text-gray-800" />
                    <div className="font-bold text-gray-800">Certificado</div>
                  </div>
                  <div className="text-center p-4 bg-accent-secondary rounded-lg">
                    <Code className="h-6 w-6 mx-auto mb-2 text-gray-800" />
                    <div className="font-bold text-gray-800">8 Horas</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800">Contenido del Curso</h3>
                  {[
                    "Introducción a JavaScript",
                    "Variables y Tipos de Datos",
                    "Funciones y Scope",
                    "DOM Manipulation",
                  ].map((lesson, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <span className="text-gray-800">
                        {idx + 1}. {lesson}
                      </span>
                      <Button size="sm" className="bg-primary hover:bg-primary-dark text-gray-800">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Code Runner */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">
                  <FileCode className="inline mr-2 h-5 w-5" />
                  Editor de Código Interactivo
                </CardTitle>
                <CardDescription>Escribe y ejecuta código JavaScript en tiempo real</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label className="text-gray-800">Código</Label>
                  <Textarea
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    className="font-mono h-32 border-2 border-primary"
                    placeholder="Escribe tu código aquí..."
                  />
                </div>
                <Button onClick={runCode} className="w-full bg-primary hover:bg-primary-dark text-gray-800">
                  <Play className="mr-2 h-4 w-4" />
                  Ejecutar Código
                </Button>
                {codeOutput && (
                  <div className="space-y-2">
                    <Label className="text-gray-800">Resultado</Label>
                    <div className="p-4 bg-gray-900 text-green-400 rounded-lg font-mono text-sm whitespace-pre-wrap">
                      {codeOutput}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">
                  <Award className="inline mr-2 h-5 w-5" />
                  Mis Certificados
                </CardTitle>
                <CardDescription>Certificados obtenidos al completar cursos</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["HTML & CSS Básico", "JavaScript Moderno"].map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-6 border-2 border-primary rounded-lg bg-gradient-to-br from-primary to-accent"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Award className="h-12 w-12 text-gray-800" />
                        <Badge className="bg-white text-gray-800">Completado</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-800">{cert}</h3>
                      <p className="text-sm text-gray-700 mb-4">Completado el 15 de Enero, 2025</p>
                      <Button className="w-full bg-white text-gray-800 hover:bg-gray-100">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar Certificado
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* USER DASHBOARD SECTION */}
        {activeSection === "dashboard" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Dashboard de Usuario</h1>
              <p className="text-gray-600">Perfil, progreso y gestión de cursos del estudiante</p>
            </div>

            {/* User Profile */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-gray-800" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-800">Juan Pérez</CardTitle>
                    <CardDescription>juan.perez@email.com</CardDescription>
                    <Badge className="mt-2 bg-primary text-gray-800">Estudiante</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary rounded-lg">
                    <div className="text-3xl font-bold text-gray-800">5</div>
                    <div className="text-sm text-gray-700">Cursos Inscritos</div>
                  </div>
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <div className="text-3xl font-bold text-gray-800">2</div>
                    <div className="text-sm text-gray-700">Cursos Completados</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-gray-800">45h</div>
                    <div className="text-sm text-gray-700">Tiempo de Estudio</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-gray-800">Progreso de Cursos</CardTitle>
                <CardDescription>Tu avance en los cursos actuales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { name: "JavaScript Moderno", progress: 75 },
                  { name: "React Avanzado", progress: 40 },
                  { name: "Node.js Backend", progress: 20 },
                ].map((course, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{course.name}</span>
                      <span className="text-sm text-gray-600">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CRUD Operations */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">Gestión de Perfil (CRUD)</CardTitle>
                <CardDescription>Actualiza tu información personal</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="profile-name">Nombre</Label>
                  <Input id="profile-name" defaultValue="Juan Pérez" className="border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profile-email">Email</Label>
                  <Input
                    id="profile-email"
                    type="email"
                    defaultValue="juan.perez@email.com"
                    className="border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profile-bio">Biografía</Label>
                  <Textarea
                    id="profile-bio"
                    placeholder="Cuéntanos sobre ti..."
                    className="border-primary"
                    defaultValue="Estudiante apasionado por la programación"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary-dark text-gray-800">Actualizar Perfil</Button>
                  <Button variant="outline" className="border-2 border-primary text-gray-800 bg-transparent">
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Plans */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">
                  <ShoppingCart className="inline mr-2 h-5 w-5" />
                  Planes de Suscripción
                </CardTitle>
                <CardDescription>Mejora tu experiencia con un plan premium</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Básico",
                      price: "Gratis",
                      features: ["5 cursos", "Certificados básicos", "Soporte email"],
                    },
                    {
                      name: "Pro",
                      price: "$19/mes",
                      features: ["Cursos ilimitados", "Certificados premium", "Soporte prioritario"],
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "$49/mes",
                      features: ["Todo de Pro", "Mentoría 1-a-1", "Proyectos exclusivos"],
                    },
                  ].map((plan, idx) => (
                    <Card
                      key={idx}
                      className={`border-2 ${plan.popular ? "border-primary bg-secondary" : "border-primary"}`}
                    >
                      <CardHeader>
                        {plan.popular && <Badge className="w-fit mb-2 bg-primary text-gray-800">Más Popular</Badge>}
                        <CardTitle className="text-gray-800">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-gray-800">{plan.price}</div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {plan.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-center gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`w-full ${plan.popular ? "bg-primary hover:bg-primary-dark text-gray-800" : "bg-gray-800 hover:bg-gray-900 text-white"}`}
                        >
                          <CreditCard className="mr-2 h-4 w-4" />
                          Seleccionar Plan
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ADMIN DASHBOARD SECTION */}
        {activeSection === "admin" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Panel de Administración</h1>
              <p className="text-gray-600">Gestión de usuarios, cursos y métricas del sistema</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Total Usuarios", value: "2,543", icon: Users, color: "bg-primary" },
                { label: "Cursos Activos", value: "48", icon: BookOpen, color: "bg-accent" },
                { label: "Certificados", value: "1,234", icon: Award, color: "bg-secondary" },
                { label: "Ingresos", value: "$45,678", icon: BarChart3, color: "bg-accent-secondary" },
              ].map((stat, idx) => (
                <Card key={idx} className="border-2 border-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-gray-800" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* User Management */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">Gestión de Usuarios (CRUD Admin)</CardTitle>
                <CardDescription>Administra los usuarios de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Buscar usuarios..." className="border-primary" />
                    <Button className="bg-primary hover:bg-primary-dark text-gray-800">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="border-2 border-primary rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-secondary">
                        <tr>
                          <th className="text-left p-3 text-gray-800">Usuario</th>
                          <th className="text-left p-3 text-gray-800">Email</th>
                          <th className="text-left p-3 text-gray-800">Rol</th>
                          <th className="text-left p-3 text-gray-800">Cursos</th>
                          <th className="text-left p-3 text-gray-800">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Juan Pérez", email: "juan@email.com", role: "Estudiante", courses: 5 },
                          { name: "María García", email: "maria@email.com", role: "Estudiante", courses: 3 },
                          { name: "Carlos López", email: "carlos@email.com", role: "Admin", courses: 0 },
                        ].map((user, idx) => (
                          <tr key={idx} className="border-t border-primary">
                            <td className="p-3 text-gray-800">{user.name}</td>
                            <td className="p-3 text-gray-600">{user.email}</td>
                            <td className="p-3">
                              <Badge
                                className={
                                  user.role === "Admin" ? "bg-primary text-gray-800" : "bg-secondary text-gray-800"
                                }
                              >
                                {user.role}
                              </Badge>
                            </td>
                            <td className="p-3 text-gray-800">{user.courses}</td>
                            <td className="p-3">
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-primary text-gray-800 bg-transparent"
                                >
                                  Editar
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-500 text-red-600 bg-transparent"
                                >
                                  Eliminar
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Management */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">Gestión de Cursos (CRUD Admin)</CardTitle>
                <CardDescription>Crea, edita y elimina cursos</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <Button className="w-full bg-primary hover:bg-primary-dark text-gray-800">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Crear Nuevo Curso
                </Button>

                <div className="space-y-3">
                  {[
                    { title: "HTML & CSS Básico", students: 1250, status: "Activo" },
                    { title: "JavaScript Moderno", students: 890, status: "Activo" },
                    { title: "Python para Principiantes", students: 654, status: "Borrador" },
                  ].map((course, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border-2 border-primary rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-800">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.students} estudiantes</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            course.status === "Activo" ? "bg-primary text-gray-800" : "bg-secondary text-gray-800"
                          }
                        >
                          {course.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="border-primary text-gray-800 bg-transparent">
                          Editar
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500 text-red-600 bg-transparent">
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="border-2 border-primary">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-gray-800">
                  <BarChart3 className="inline mr-2 h-5 w-5" />
                  Métricas y Análisis
                </CardTitle>
                <CardDescription>Estadísticas de uso de la plataforma</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-800">Usuarios Activos</span>
                      <span className="text-sm font-medium text-gray-800">85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-800">Tasa de Completación</span>
                      <span className="text-sm font-medium text-gray-800">72%</span>
                    </div>
                    <Progress value={72} className="h-3" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-800">Satisfacción del Usuario</span>
                      <span className="text-sm font-medium text-gray-800">92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-primary border-t-4 border-primary-dark mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">Roble Amarillo</span>
          </div>
          <p className="text-gray-700">Plataforma educativa para aprender programación</p>
          <p className="text-sm text-gray-600 mt-2">© 2025 Roble Amarillo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
