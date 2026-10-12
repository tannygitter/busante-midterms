import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-surface py-8 text-center text-sm text-white/70">
      © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
    </footer>
  );
}
