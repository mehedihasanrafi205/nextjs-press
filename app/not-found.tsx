"use client"

import Link from "next/link"
import { AlertCircle, ArrowRight, Home } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 text-center">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="w-full max-w-md space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertCircle className="size-12 text-destructive" />
          </div>
        </div>

        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <p className="text-lg font-semibold text-muted-foreground">
            Page Not Found
          </p>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <Home className="size-4" />
            Return Home
          </Link>

          {/* <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2",
            )}
          >
            Contact Support
            <ArrowRight className="size-4" />
          </Link> */}
        </div>

        {/* Helpful Links
        <div className="pt-6 border-t border-border">
          <p className="mb-4 text-sm text-muted-foreground">
            Common pages to visit:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/about"
              className="text-sm text-primary hover:underline transition-colors"
            >
              About
            </Link>
            <span className="text-muted-foreground">&middot;</span>
            <Link
              href="/blog"
              className="text-sm text-primary hover:underline transition-colors"
            >
              Blog
            </Link>
            <span className="text-muted-foreground">&middot;</span>
            <Link
              href="/docs"
              className="text-sm text-primary hover:underline transition-colors"
            >
              Docs
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}
