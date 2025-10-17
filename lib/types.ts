export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "admin"
  enrolledCourses: string[]
  completedCourses: string[]
  certificates: string[]
  progress: Record<string, number>
}

export interface Course {
  id: string
  title: string
  description: string
  category: string
  level: "beginner" | "intermediate" | "advanced"
  duration: string
  lessons: number
  students: number
  rating: number
  thumbnail: string
  instructor: string
  price: number
  isFree: boolean
  tags: string[]
}

export interface Lesson {
  id: string
  courseId: string
  title: string
  content: string
  order: number
  duration: string
  type: "video" | "text" | "code" | "quiz"
}

export interface Certificate {
  id: string
  userId: string
  courseId: string
  courseName: string
  completedDate: string
  certificateUrl: string
}

export interface Plan {
  id: string
  name: string
  price: number
  period: "monthly" | "yearly"
  features: string[]
  popular?: boolean
}

export interface AdminStats {
  totalUsers: number
  totalCourses: number
  totalRevenue: number
  activeStudents: number
}
