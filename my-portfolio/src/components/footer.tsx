"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export function Footer() {
  return (
    <footer className="w-full bg-background/30 dark:bg-background/50 backdrop-blur-xl border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info - Left Side */}
          <div className="flex flex-col space-y-2">
            <a 
              href="https://wa.me/447479460160" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                +44 7479 460160
              </span>
            </a>
            <a 
              href="mailto:fernand3zdev@gmail.com" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                fernand3zdev@gmail.com
              </span>
            </a>
          </div>

          {/* Social Links - Right Side */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://github.com/fernand3z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://linkedin.com/in/amoda-fernando"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-background/50 hover:scale-110 transition-all duration-200 text-muted-foreground hover:text-foreground"
              asChild
            >
              <a
                href="https://x.com/Fernand3zdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <TwitterLogoIcon className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Amoda Fernando. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 