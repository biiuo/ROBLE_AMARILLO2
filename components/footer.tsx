import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-xl">Roble Amarillo</span>
            </div>
            <p className="text-sm text-gray-300">La mejor plataforma para aprender programación y desarrollo web.</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="font-semibold mb-4">Cursos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/courses?category=web" className="hover:text-primary transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="/courses?category=programming" className="hover:text-primary transition-colors">
                  Programación
                </Link>
              </li>
              <li>
                <Link href="/courses?category=frontend" className="hover:text-primary transition-colors">
                  Frontend
                </Link>
              </li>
              <li>
                <Link href="/courses?category=backend" className="hover:text-primary transition-colors">
                  Backend
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/code-runner" className="hover:text-primary transition-colors">
                  Editor de Código
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="hover:text-primary transition-colors">
                  Certificados
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary transition-colors">
                  Buscar
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Planes
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Roble Amarillo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
