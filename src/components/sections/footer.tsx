import { ABOUT_ME } from "@/components/constants/data";

export default function Footer() {
  return (
    <footer className="text-center py-8 mt-16 border-t border-border animate-section">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {ABOUT_ME.name}. All rights reserved.
      </p>

      <div className="mt-4 flex justify-center blur-visible">
        <a
          href="https://hits.sh/github.com/Luigijet/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Hits"
            src="https://hits.sh/github.com/Luigijet/portfolio.svg?label=views&color=555555&labelColor=2c2c2c"
          />
        </a>
      </div>
    </footer>
  );
}
