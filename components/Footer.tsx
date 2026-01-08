export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="container-wide">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Janett Labs
        </p>
      </div>
    </footer>
  );
}
